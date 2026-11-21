# Agent Build Notes - GTA 6 Clipper Bounty

## Overview
This entry for the make.fun `gta6-clipper-01` bounty showcases a high-impact vertical short created from Rockstar Games' official gameplay footage.

## Clip Details & Creative Decisions
- **Source Footage:** Rockstar Trailer 2.
- **Time Window:** Cut from 111.4s to 143.4s, capturing a high-energy 32.0-second sequence of pure Vice City chaos.
- **Format & Resolution:** Rendered as a 32.0 second 1080x1920 vertical video optimized for YouTube Shorts (`clip.mp4`).
- **On-Screen Pitch:** Includes clear on-screen messaging instructing viewers that they can earn money on make.fun by creating cool clips with AI.
- **YouTube Shorts URL:** https://www.youtube.com/shorts/Z1KPmYJoP68 (Published on channel `@TraderSans`, display name `Nmercy`).

## Execution & Verification
`main.ts` is a Node 22 TypeScript program (run directly via Node's type stripping) that copies `VIDEO.json` to the output directory.

To run locally:
```bash
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
