import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, join } from 'node:path';

const repoRoot = resolve(fileURLToPath(import.meta.url), '..');
const botDir = process.env.MAKEFUN_BOT_DIR ? resolve(repoRoot, process.env.MAKEFUN_BOT_DIR) : '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ? resolve(repoRoot, process.env.MAKEFUN_OUTPUT_DIR) : '/output';
const srcPath = join(botDir, 'POST.json');
const destPath = join(outputDir, 'POST.json');

try {
  const content = readFileSync(srcPath);
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(destPath, content);

  const copiedData = JSON.parse(readFileSync(destPath, 'utf8'));
  if (!copiedData || typeof copiedData.url !== 'string' || !copiedData.url.trim()) {
    throw new Error(`Invalid POST.json content: expected a JSON object with a valid 'url' string`);
  }
} catch (error) {
  console.error(`Failed to process POST.json (source: ${srcPath}, destination: ${destPath}): ${error.message}`);
  process.exit(1);
}
