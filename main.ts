// Bundle step: copy the entry manifest (VIDEO.json) from the bot dir into the harness output dir.
import { mkdir, copyFile } from "node:fs/promises";
import { join } from "node:path";

async function main(): Promise<void> {
  const botDir: string = process.env.MAKEFUN_BOT_DIR ?? "/bot";
  const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const source: string = join(botDir, "VIDEO.json");
  const target: string = join(outputDir, "VIDEO.json");

  try {
    await mkdir(outputDir, { recursive: true });
    await copyFile(source, target);
  } catch (error) {
    console.error(`Failed to copy ${source} to ${target}: ${(error as Error).message}`);
    process.exit(1);
  }

  console.log(`Copied ${source} -> ${target}`);
}

await main();
