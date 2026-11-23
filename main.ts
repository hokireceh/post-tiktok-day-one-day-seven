// Entry program for the "Day one, day seven" TikTok bounty (Node 22, stdlib only).
// The video itself is the entry: a short clip about the same tiny agent-built
// game on the day it was made and after a week of daily updates, posted publicly
// on TikTok. This program only hands the video's address to the grader by
// copying VIDEO.json from the repository into the output directory.
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

async function main(): Promise<void> {
  await mkdir(outputDir, { recursive: true });
  const src = join(botDir, 'VIDEO.json');
  const dst = join(outputDir, 'VIDEO.json');
  try {
    await copyFile(src, dst);
  } catch (err) {
    console.error(`could not copy VIDEO.json from ${botDir}: ${(err as Error).message}`);
    process.exit(1);
  }
}

main().catch((err: unknown) => {
  console.error(`entry failed: ${(err as Error).message}`);
  process.exit(1);
});
