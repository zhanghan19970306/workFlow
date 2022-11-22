#!/usr/bin/env zx

import './shared/index.mjs'

import { $ } from 'zx'

// code format
await $`prettier --write . --ignore-unknown`

// ls lint
await $`pnpm exec ls-lint`

// Js lint
await $`eslint --ext .vue,.js,.ts,jsx,.tsx \"./src/\" --fix`
