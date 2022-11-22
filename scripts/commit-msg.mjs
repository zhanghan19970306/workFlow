#!/usr/bin/env zx

import './shared/index.mjs'

import { fs } from 'zx'

const TYPE_MAP = new Map([
  ['feat', { emoji: '✨', title: 'feat', description: '新的特性' }],
  ['fix', { emoji: '🐛', title: 'fix', description: '修复Bug' }],
  ['merge', { emoji: '🔀', title: 'merge', description: '分支合并' }],
  ['style', { emoji: '🎨', title: 'style', description: '代码格式的更改' }],
  ['perf', { emoji: '🚀', title: 'perf', description: '提升性能' }],
  ['test', { emoji: '✅', title: 'test', description: '添加或更新测试用例' }],
  ['revert', { emoji: '⏪️', title: 'revert', description: '版本回退' }],
  ['build', { emoji: '📦', title: 'build', description: '打包工具的更改' }],
  ['chore', { emoji: '🔧', title: 'chore', description: '更改配置文件' }],
  ['ci', { emoji: '👷', title: 'ci', description: '对CI配置和脚本的更改' }],
  ['refactor', { emoji: '💻', title: 'refactor', description: '代码进行重构' }],
  ['docs', { emoji: '📝', title: 'docs', description: '添加或更新文档' }],
  ['release', { emoji: '🔖', title: 'release', description: '发布/版本标签' }],
])

// commit regexp
const commitRE = new RegExp(
  `^(${[...TYPE_MAP.values()].map(({ title, emoji }) => `${title}|${emoji} ${title}`).join('|')})(\\(.+\\))?: .{1,100}`
)

try {
  // msg path
  const msgPath = process.env.GIT_PARAMS

  // get commit text
  let msg = fs.readFileSync(msgPath, 'utf-8') // 获取到内容
  msg = msg.slice(0, msg.indexOf('\n#')).trim() // 去除所有的#注释

  // is git merge create info
  if (/Merge.+branch \'.+\'/.test(msg)) {
    fs.writeFileSync(msgPath, `🔀 ${msg.replace('Merge', 'merge:')}`)

    process.exit(0)
  }

  if (msg.length > 100) {
    throw new Error(`commit信息内容不得超出100个字符串长度`)
  }

  if (commitRE.test(msg)) {
    // 添加emoji
    for (const [key, { emoji }] of TYPE_MAP) {
      if (msg.startsWith(key)) {
        fs.writeFileSync(msgPath, `${emoji} ${msg}`)
        break
      }
    }
  } else {
    // show error feedback
    console.boxen.error(
      `commit信息不符合规范\n正确示例: "feat: 新增xxx功能..."\n正确示例: "feat(moduleName): 新增xxx功能..." `
    )

    // process quit
    process.exit(1)
  }
} catch (error) {
  // show error feedback
  console.boxen.error(error?.stdout || error?.stderr || error?.message || '未知错误')

  // process quit
  process.exit(1)
}
