// Deadpan forecast entry for the make.fun bounty
// "Deadpan Forecasts for Cities That Do Not Exist".
//
// The program writes one fixed, hand-crafted forecast line to
// <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output/entry.txt).
// The line is a constant: no randomness, no clock, no network, so the
// output is byte-for-byte identical on every run.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One invented city, one forecast, read straight by a meteorologist
// who has seen it all before and is not impressed. The line is a
// single sentence: temperature, wind-driven rain, and one mundane
// civic consequence for the umbrella owners of New Quimble.
const FORECAST =
  'New Quimble sees a high of 61 degrees with rain falling sideways at 40 miles an hour, with a 60% chance your umbrella ends up in the next county.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), FORECAST + '\n', 'utf8');
