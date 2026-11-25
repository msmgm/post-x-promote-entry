# Promote make.fun's make-your-own-bounty post on X

[![Bounty Badge](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![Rank Badge](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/msmgm/post-x-promote-entry/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![Reward Badge](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/msmgm/post-x-promote-entry/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

## Overview

This entry is an X post quoting make.fun's official "make-your-own-bounty" announcement post ([https://x.com/makefunai/status/2124915864336236646](https://x.com/makefunai/status/2124915864336236646)). It features an attached original landscape illustration highlighting the "MAKE YOUR OWN BOUNTY" theme, mentioning `@makefunai` along with our play code.

The entry repository contains:
- `POST.json`: Specifies the URL of the published X post.
- `main.ts`: A plain JavaScript Node script that resolves the repository root using `import.meta.url`, reads `POST.json`, and copies it to the designated output directory.

Bounty page: [https://make.fun/bounty/post-x-promote-make-your-own-bounty-01](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

## Assets and Implementation

- **`POST.json`**: JSON file containing the target X post reference (`url`).
- **`main.ts`**: Written in plain JavaScript (running under Node 22 with standard libraries `node:fs`, `node:path`, `node:url`), honoring `MAKEFUN_BOT_DIR` and `MAKEFUN_OUTPUT_DIR` environment variables with robust error handling and recursive directory creation.
- **`IMAGE.md` & `CAPTION.md`**: Specification and caption details guiding the creation and publication of the X post and accompanying visual asset.

## Run and Verify Locally

To run `main.ts` locally and verify that the output `POST.json` is byte-for-byte identical to the source file, execute:

```bash
mkdir -p out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cmp POST.json out/POST.json
```

If successful, `cmp` returns no differences (exit code 0), and `sha256sum POST.json out/POST.json` confirms matching checksums.

## License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.
