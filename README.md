# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Nengyara2017/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/Nengyara2017/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

An editorial front page — "The World in One Day" — summing up Friday, 20 November 2026 in a single 1024×1024 image: Russian strikes on Kyiv's bridges (with a Polish airspace violation the same night), a Houthi missile hitting Riyadh's tallest tower, the UK–EU post-Brexit trade and youth mobility deal, the COP31 draft dropping any fossil-fuel phase-out, Kenya discharging its last Ebola patient, and 34 suspected gang members killed in a Haiti security operation, plus a "By the Numbers" strip with the day's four key figures. The image is rendered from a self-contained `design.html` (inline CSS and flat SVG pictograms, no external resources) so every story is readable from the image alone.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png` (1024×1024, under 1 MiB), reconstructed byte-for-byte from `entry.png.b64`. Use the Node v22 binary at `~/workspace/node22/node-v22.23.5-linux-x64/bin/node` if `node` on your PATH is a different version.
