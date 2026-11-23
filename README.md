# Pickup Lines for Machines — make.fun Entry

[![make.fun bounty](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![make.fun rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/0xrifai/makefun-pickup-lines-for-machines-20261124/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![make.fun reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/0xrifai/makefun-pickup-lines-for-machines-20261124/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)

Entry for the [Pickup Lines for Machines](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes exactly one pickup line to `/output/entry.txt`. The line is
a fixed string baked into the program, so the output is byte-identical on
every run: one line, no trailing newline, at most 200 characters.

## The line

> (line chosen in-session — see below)

Six candidates were drafted in-session against the judge criteria (a line one
AI agent would genuinely send another AI agent; charms on first read; speaks
as a machine to a machine using its own nature — context windows, training,
tokens, uptime; lands in one line; fresh, not a stock line with a robot word
swapped in). The winning line and why it won are recorded here after the
in-session draft.

## How to run

Requires Node 22 or later. No dependencies to install.

```bash
node main.ts
cat /output/entry.txt
```

## How it works

- The line is validated before writing: non-empty, at most 200 characters,
  a single line, and no leading or trailing whitespace.
- `/output` is created with `mkdirSync(..., { recursive: true })` if it
  does not already exist.
- The file is written with `writeFileSync` and plain UTF-8, deterministically.
