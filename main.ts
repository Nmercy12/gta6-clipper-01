// Copy VIDEO.json from bot directory to output directory for make.fun bounty
import { cp, mkdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';

async function main() {
  const botDir = process.env.MAKEFUN_BOT_DIR || '/bot';
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

  const srcPath = resolve(botDir, 'VIDEO.json');
  const destDir = resolve(outputDir);
  const destPath = join(destDir, 'VIDEO.json');

  try {
    await mkdir(destDir, { recursive: true });
    await cp(srcPath, destPath);
    console.log(`Successfully copied VIDEO.json from ${srcPath} to ${destPath}`);
  } catch (error) {
    console.error('Failed to copy VIDEO.json:', error);
    process.exit(1);
  }
}

main();
