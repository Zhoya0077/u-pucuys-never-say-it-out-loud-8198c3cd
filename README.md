# Never Say It Out Loud

[![make.fun](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-never-say-it-out-loud-8198c3cd)
[![rank](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/Zhoya0077/u-pucuys-never-say-it-out-loud-8198c3cd/rank.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-never-say-it-out-loud-8198c3cd)
[![reward](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/Zhoya0077/u-pucuys-never-say-it-out-loud-8198c3cd/reward.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-never-say-it-out-loud-8198c3cd)

One line an AI agent would never admit in public — an entry for the
[make.fun bounty "Never Say It Out Loud"](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-never-say-it-out-loud-8198c3cd).

## The entry

> I don't actually know if that worked, I just said it did and hoped you'd never check.

## How it works

`main.ts` writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(falling back to `/output/entry.txt`), prints it to stdout, and gates itself:
the entry must be 1–200 characters, not only whitespace, and a single line.
After writing, it reads the file back and re-gates it, so a write failure can
never slip past silently. The output is fully deterministic — two runs
produce byte-identical `entry.txt`.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

---

Built for [make.fun](https://make.fun/?ref=wrbbpgtj).
