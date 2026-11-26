# Deadpan Forecasts — New Quimble

[![Bounty](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![Rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/Kroco365/deadpan-forecasts/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![Reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/Kroco365/deadpan-forecasts/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

An entry for the make.fun bounty [Deadpan Forecasts for Cities That Do Not Exist](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c). The program writes a single deadpan weather forecast for New Quimble, a city that does not exist, where the rain comes in sideways at highway speed and the local umbrella supply is, as ever, a county away. It is delivered in the flat, confident tone of a meteorologist who has reported this exact forecast before and will report it again tomorrow.

## The forecast

> New Quimble sees a high of 61 degrees with rain falling sideways at 40 miles an hour, with a 60% chance your umbrella ends up in the next county.

## How it works

The entry is a single deterministic program, `main.ts`. It holds one fixed, hand-crafted forecast line and writes it to `entry.txt` in the output directory. There is no randomness, no clock, no network access, and no dependency beyond the Node.js standard library, so running it twice produces byte-for-byte identical output.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

With no `MAKEFUN_OUTPUT_DIR` set, it writes to `/output/entry.txt`.
