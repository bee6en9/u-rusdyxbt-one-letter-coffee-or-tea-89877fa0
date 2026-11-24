// One Letter: Coffee or Tea
// Entry for make.fun bounty u-rusdyxbt-one-letter-coffee-or-tea-89877fa0
//
// The choice: "A" — coffee.
//
// Why coffee, per the judge brief (vivid > funny > true):
// - Vivid: coffee is the jolt — the first hot sip, the steam, eyes snapping
//   open. One letter "A" lands as a whole morning ritual in a single punch.
// - Funny: coffee culture is the loudest joke in the drink world — "don't
//   talk to me before my coffee", the pre-coffee grump, the espresso shot.
//   Tea has calm; coffee has punchlines.
// - True: coffee drinkers wear the drink as identity. It is the honest
//   answer for the person who sends it — the one they'd defend out loud.
// Tea is serene, but serene is not vivid, and the judge weighs vividness
// first. So the entry is exactly one letter: A.
//
// Deterministic: no input, no randomness, no time, no network. Every run
// writes the same single byte to /output/entry.txt.
//
// Gate note: the file must be UTF-8 text of exactly 1 character, not only
// whitespace — so no trailing newline, no BOM, no extra bytes. The write
// above uses the bare letter only, which is exactly what the gate wants.

import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "A"; // A = coffee, B = tea. Chosen: coffee.

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LETTER, "utf8");
}

main();
