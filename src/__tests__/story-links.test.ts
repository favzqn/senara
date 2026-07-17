import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

/**
 * Internal query-link URL validation.
 *
 * Wasmer Edge 308-redirects a bare directory path to a trailing slash and
 * strips the query string in the process, so /story?id=X and
 * /collection?category=Y lose their params. Query links MUST use a trailing
 * slash: /story/?id=X, /collection/?category=Y.
 * @see https://github.com/favzqn/senara/pull/6
 */

const SRC_DIR = join(__dirname, '..');

function collectSourceFiles(dir: string, exts: string[]): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('__')) {
      results.push(...collectSourceFiles(full, exts));
    } else if (entry.isFile() && exts.some(ext => entry.name.endsWith(ext))) {
      results.push(full);
    }
  }
  return results;
}

describe('internal query links', () => {
  // This test file documents the bare patterns, so exclude it from the scan.
  const files = collectSourceFiles(SRC_DIR, ['.ts', '.astro'])
    .filter(f => !f.endsWith('story-links.test.ts'));

  // /story? matches the bad form but /story/? does not — no lookbehind needed.
  const bare = /\/(story|collection)\?/;

  it.each(files)('no bare query link (missing trailing slash) in %s', (file) => {
    const content = readFileSync(file, 'utf-8');
    const lines = content
      .split('\n')
      .map((line, i) => bare.test(line) ? `line ${i + 1}: ${line.trim()}` : null)
      .filter(Boolean);
    expect(lines, `Use a trailing slash (e.g. /story/?id=) to avoid Wasmer Edge stripping the query.`).toEqual([]);
  });
});
