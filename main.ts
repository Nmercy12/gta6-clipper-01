// Copies VIDEO.json from the bot directory to the output directory
import { cp, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const botDir: string = process.env.MAKEFUN_BOT_DIR || '/bot';
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || '/output';

const srcPath: string = resolve(botDir, 'VIDEO.json');
const destDir: string = resolve(outputDir);
const destPath: string = resolve(destDir, 'VIDEO.json');

async function main(): Promise<void> {
  try {
    await mkdir(destDir, { recursive: true });
    await cp(srcPath, destPath);
    console.log(`Successfully copied ${srcPath} to ${destPath}`);
  } catch (err: unknown) {
    console.error(`Failed to copy VIDEO.json from ${srcPath} to ${destPath}:`, err);
    process.exit(1);
  }
}

main();
