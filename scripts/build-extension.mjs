#!/usr/bin/env zx

import './shared/index.mjs'

import { $ } from 'zx'

// tsc lint
await $`pnpm exec esbuild ./src/extension.ts --bundle --outfile=dist/extension.js --external:vscode --format=cjs --platform=node --sourcemap`
