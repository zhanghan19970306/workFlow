#!/usr/bin/env zx

import './shared/index.mjs'

import { $ } from 'zx'

// tsc lint
// await $`pnpm exec vue-tsc --noEmit`

// build view and assets
await $`pnpm exec vite build`

// build extension core
await $`pnpm run esbuild`
