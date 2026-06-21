# @chirag127/oriz-book-build

[![npm](https://img.shields.io/npm/v/@chirag127/oriz-book-build.svg)](https://www.npmjs.com/package/@chirag127/oriz-book-build)
[![CI](https://github.com/chirag127/oriz-book-build-npm-pkg/actions/workflows/ci.yml/badge.svg)](https://github.com/chirag127/oriz-book-build-npm-pkg/actions/workflows/ci.yml)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

Pandoc-wrapping CLI for the chirag127/oriz family. Builds EPUB3 / PDF / MOBI / Markua from a `manuscript/` dir of Markua-flavoured `.md` files + `book.json` metadata. Used by `oriz-*-book` repos and exposed via the `oriz-book` bin.

Part of the [`chirag127/oriz`](https://github.com/chirag127/oriz) family.

## Status

`v0.1.x` — slug reservation + stub. Real Pandoc invocation lands in `v0.1.1`.

## Usage (planned)

```bash
oriz-book build      # build EPUB/PDF/MOBI/Markua per book.json
oriz-book preview    # local preview server
oriz-book publish    # fan-out to Leanpub / Gumroad / KDP per channels
```

## Cross-refs

- [the family package set](https://github.com/chirag127/oriz/blob/main/knowledge/architecture/the-six-packages.md)
- [security policy](./SECURITY.md) · [code of conduct](./CODE_OF_CONDUCT.md) · [contributing](./CONTRIBUTING.md)
