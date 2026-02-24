#!/usr/bin/env node
/**
 * Version Bump Script for Senara
 * 
 * Usage:
 *   node bump-version.js          # Bump patch version (1.0.0 -> 1.0.1)
 *   node bump-version.js minor    # Bump minor version (1.0.0 -> 1.1.0)
 *   node bump-version.js major    # Bump major version (1.0.0 -> 2.0.0)
 *   node bump-version.js 2.0.0    # Set specific version
 * 
 * This script:
 * 1. Updates version.json
 * 2. Updates all ?v= query strings in HTML files
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const VERSION_FILE = path.join(ROOT_DIR, 'version.json');

// HTML files to update
const HTML_FILES = [
  'index.html',
  'about.html',
  'aksesibilitas.html',
  'contribute.html',
  'donasi.html',
  'faq.html',
  'keselamatan.html',
  'koleksi.html',
  'kontak.html',
  'pendekatan.html',
  'privacy.html',
  'roadmap.html',
  'story.html',
  'terms.html',
  'tim.html',
  'tv.html',
  'untuk-organisasi.html',
];

// Asset patterns to version
const ASSET_PATTERNS = [
  /href="(style\/[^"]+\.css)(\?v=[^"]*)?"/g,
  /src="(js\/[^"]+\.js)(\?v=[^"]*)?"/g,
  /src="(data\/[^"]+\.js)(\?v=[^"]*)?"/g,
];

function readVersion() {
  try {
    const data = JSON.parse(fs.readFileSync(VERSION_FILE, 'utf8'));
    return data.version || '1.0.0';
  } catch {
    return '1.0.0';
  }
}

function writeVersion(version) {
  const data = {
    version,
    buildTime: new Date().toISOString(),
  };
  fs.writeFileSync(VERSION_FILE, JSON.stringify(data, null, 2) + '\n');
}

function bumpVersion(current, type) {
  const parts = current.split('.').map(Number);
  
  switch (type) {
    case 'major':
      return `${parts[0] + 1}.0.0`;
    case 'minor':
      return `${parts[0]}.${parts[1] + 1}.0`;
    case 'patch':
    default:
      return `${parts[0]}.${parts[1]}.${parts[2] + 1}`;
  }
}

function updateHtmlFile(filePath, version) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  for (const pattern of ASSET_PATTERNS) {
    const newContent = content.replace(pattern, (match, assetPath) => {
      updated = true;
      const attr = match.startsWith('href') ? 'href' : 'src';
      return `${attr}="${assetPath}?v=${version}"`;
    });
    content = newContent;
  }
  
  if (updated) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

function main() {
  const arg = process.argv[2];
  const currentVersion = readVersion();
  let newVersion;
  
  // Determine new version
  if (!arg) {
    newVersion = bumpVersion(currentVersion, 'patch');
  } else if (['major', 'minor', 'patch'].includes(arg)) {
    newVersion = bumpVersion(currentVersion, arg);
  } else if (/^\d+\.\d+\.\d+$/.test(arg)) {
    newVersion = arg;
  } else {
    console.error('Usage: node bump-version.js [major|minor|patch|x.y.z]');
    process.exit(1);
  }
  
  console.log(`\n🔄 Bumping version: ${currentVersion} → ${newVersion}\n`);
  
  // Update version file
  writeVersion(newVersion);
  console.log(`✓ Updated version.json`);
  
  // Update HTML files
  let updatedCount = 0;
  for (const htmlFile of HTML_FILES) {
    const filePath = path.join(ROOT_DIR, htmlFile);
    if (fs.existsSync(filePath)) {
      if (updateHtmlFile(filePath, newVersion)) {
        console.log(`✓ Updated ${htmlFile}`);
        updatedCount++;
      }
    }
  }
  
  console.log(`\n✅ Done! Updated ${updatedCount} HTML files to v${newVersion}\n`);
}

main();
