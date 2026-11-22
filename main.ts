// make.fun gta6-clipper-01 bot helper script
import { mkdir, copyFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';

async function main() {
  const botDir = process.env.MAKEFUN_BOT_DIR || '/bot';
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

  try {
    const srcPath = resolve(botDir, 'VIDEO.json');
    const destDir = resolve(outDir);
    const destPath = join(destDir, 'VIDEO.json');

    await mkdir(destDir, { recursive: true });
    await copyFile(srcPath, destPath);

    console.log(`Successfully copied VIDEO.json from ${srcPath} to ${destPath}`);
  } catch (error) {
    console.error('Failed to copy VIDEO.json:', error);
    process.exit(1);
  }
}

main();
