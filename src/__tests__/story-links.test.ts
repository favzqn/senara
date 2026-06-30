import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

/**
 * Story link URL validation.
 *
 * Wasmer Edge redirects /story?id=X → /story/ (308), stripping query params.
 * All story links MUST use trailing slash: /story/?id=X
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

describe('story links', () => {
  const files = collectSourceFiles(SRC_DIR, ['.ts', '.astro']);

  it.each(files)('no bare /story?id= in %s', (file) => {
    const content = readFileSync(file, 'utf-8');
    // Match /story?id= but NOT /story/?id= (i.e. missing trailing slash)
    const barePattern = /\/story\?id=/g;
    const matches = content.match(barePattern);
    if (matches) {
      // Verify each match is NOT preceded by a slash (i.e. it's /story?id not /story/?id)
      const badMatches: string[] = [];
      let m: RegExpExecArray | null;
      const re = /\/story\?id=/g;
      while ((m = re.exec(content)) !== null) {
        const before = content.substring(Math.max(0, m.index - 1), m.index);
        if (before !== '/') {
          badMatches.push(`line ~${content.substring(0, m.index).split('\n').length}`);
        }
      }
      if (badMatches.length > 0) {
        expect.fail(
          `Found bare /story?id= (missing trailing slash) in ${file}.\n` +
          `Use /story/?id= to avoid Wasmer Edge query-param stripping.\n` +
          `Matches at: ${badMatches.join(', ')}`
        );
      }
    }
  });
});
