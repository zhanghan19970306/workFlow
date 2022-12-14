#!/usr/bin/env zx

import './shared/index.mjs'
import prompts from 'prompts'
import { fs, $ } from 'zx'

// 获取升级后版本号
let { name, cname } = await prompts([
  {
    type: 'text',
    name: 'name',
    message: '功能名称为? (Tip: 英文)',
  },
  {
    type: 'text',
    name: 'cname',
    message: '功能名称为? (Tip: 中文)',
  },
])

// 侧栏添加
const sidebarVueContent = fs.readFileSync('./src/module/sidebar/app.vue', 'utf-8')
fs.writeFileSync(
  './src/module/sidebar/app.vue',
  sidebarVueContent.replace(
    '/** fs-placeholder */',
    `{
    desc: '这里是描述...',
    title: '${cname}',
    tag: ['便捷工具'],
    command: 'qmai.${name}',
    avatar: '<svg viewBox="0 0 125 125"><title>Artboard 25</title><g data-name="person 18"><path data-name="neck" d="M77,80.59s-.67-.29-.67-.88V73l-26,1.29s.29,7.91-.31,8.59c0,0-3.1,2.27-2.2,4.15C49.71,91,55.06,93.35,59.12,94c5,.8,12.63,0,17-2.81C79,89.37,80.84,82.28,77,80.59Z" fill="#fce7d4" stroke="#020202" stroke-miterlimit="10" stroke-width="0.75"/><path data-name="face" d="M81,56.13s-.54,9.19-.73,9.94a12.71,12.71,0,0,1-1.47,3.56,68.55,68.55,0,0,1-5.5,7.52c-1,1-3.11,4.12-4.29,4.46a28.11,28.11,0,0,1-5.85.94c-1.25-.07-5.76-.67-6.75-1.27S52,76.64,49.17,72.91,44.9,66.14,44.7,65.2a42.77,42.77,0,0,1-.26-4.33L44,61s-.06.95-.89,1.06c-1.19.15-1.91-1.35-2.22-2.27-.51-1.53-.29-3.22-.84-4.75s-3.06-6.88-1.06-8.24c1.75-1.19,3.31.49,3.88,2.09a15.67,15.67,0,0,1,.44,1.63l.34-.09s-.05-3,0-5.06c.09-3.88-1.1-8.22.35-12C48.75,21,53.27,20.54,64.38,20.18c9.91-.33,15.47,7.72,16.22,11.4a36.54,36.54,0,0,1,.88,9c-.15,2.73-.52,9.53-.52,9.53l.32.06a28.45,28.45,0,0,1,1.32-3.32,1.72,1.72,0,0,1,3.18,1.29c-.29,1.07-.82,4.14-1,5.38a16.46,16.46,0,0,0,0,2.72c0,.83-.35,3.7-1.57,3.67C82.42,59.85,80.57,59.9,81,56.13Z" fill="#fce7d4" stroke="#020202" stroke-miterlimit="10" stroke-width="0.75"/><path data-name="Sweater" d="M2.84,125.7s.29-1.13,1-4.53,5.22-15,7.61-17.93,6-4.53,8.49-5.74S47.05,83.4,47.05,83.4a29.56,29.56,0,0,0,16.06,5c9.28,0,17-5.58,17-5.58,0-.71,19.57,11.74,25.33,14.35A27.41,27.41,0,0,1,118,109c2.37,4.53,5,16.43,5,16.43" fill="#202133" stroke="#000" stroke-miterlimit="10" stroke-width="0.75"/><path d="M44.34,48.38a7.48,7.48,0,0,0,14.95,0c0-4,1.12-7.22-7.47-7.22C44.81,41.16,44.34,44.39,44.34,48.38Z" fill="none" stroke="#020202" stroke-miterlimit="10" stroke-width="0.75"/><path d="M79.52,48.25a7.34,7.34,0,0,1-14.67,0c0-3.92-1.1-7.09,7.34-7.09C79.07,41.16,79.52,44.33,79.52,48.25Z" fill="none" stroke="#020202" stroke-miterlimit="10" stroke-width="0.75"/><path d="M65.14,47s-3.47-1.68-5.8,0" fill="none" stroke="#020202" stroke-miterlimit="10" stroke-width="0.75"/><path data-name="Collar" d="M47.05,83.4a6.53,6.53,0,0,0,.67-2,7.08,7.08,0,0,1,.7-2.5c.39-.43,1.64-.5,1.64-.5s-1,1.49-.46,2a24.37,24.37,0,0,0,3.9,3c1.58.93,8.39,4.45,9.13,4.79s-.09.51-.52.54-3.48.36-4.5,1.47-7.29,8.17-7.29,8.17S46.52,83.92,47.05,83.4Z" fill="#202133" stroke="#000" stroke-miterlimit="10" stroke-width="0.75"/><path data-name="collar" d="M76.73,78.09s.75-.34,1,.32.39,2,.45,2.32A22.2,22.2,0,0,0,81,83.18L78,97.57s-6.61-4.84-9.12-6.17-5.92-2.8-5.77-3,13-6.82,13.62-9.62a.81.81,0,0,0,0-.38Z" fill="#202133" stroke="#000" stroke-miterlimit="10" stroke-width="0.75"/><line x1="59.57" y1="88.99" x2="59.57" y2="125.47" fill="#fff" stroke="#020202" stroke-miterlimit="10" stroke-width="0.75"/><line x1="67.8" y1="90.52" x2="67.8" y2="125.47" fill="#fff" stroke="#020202" stroke-miterlimit="10" stroke-width="0.75"/><circle cx="63.68" cy="103.19" r="1.96" fill="#fff" stroke="#020202" stroke-miterlimit="10" stroke-width="0.75"/><circle data-name="button" cx="63.68" cy="119.16" r="1.96" fill="#fff" stroke="#020202" stroke-miterlimit="10" stroke-width="0.75"/><path d="M57.4,46.46c0,1.37-.56,2.48-1.26,2.48s-1.26-1.11-1.26-2.48,0-2.47,1.26-2.47C57,44,57.4,45.1,57.4,46.46Z" fill="#fff" stroke="#020202" stroke-miterlimit="10" stroke-width="0.75"/><path data-name="Eye" d="M73.63,46c0,1.47-.56,2.66-1.26,2.66S71.11,47.49,71.11,46s0-2.67,1.26-2.67C73.23,43.35,73.63,44.54,73.63,46Z" fill="#fff" stroke="#020202" stroke-miterlimit="10" stroke-width="0.75"/><path d="M57.17,50.31A3.8,3.8,0,0,1,55,51.37c-1.11.05-2.69-.57-3-1.35" fill="none" stroke="#020202" stroke-miterlimit="10" stroke-width="0.75"/><path data-name="undereye" d="M68.78,50.45a7,7,0,0,0,3,1.28,3.43,3.43,0,0,0,2.52-1.55" fill="none" stroke="#020202" stroke-miterlimit="10" stroke-width="0.75"/><path d="M65.18,49.86s2.07,8.13,2.15,8.85,1.16,3.37.83,3.78-.34,1.45-1.09,1.61A15.28,15.28,0,0,1,64.24,64a4.1,4.1,0,0,1-1.42-.5s-1.13.32-1.48.12a1.72,1.72,0,0,1-.74-1.28A5,5,0,0,1,61.51,61" fill="none" stroke="#020202" stroke-miterlimit="10" stroke-width="0.75"/><path d="M81,25.2l-.49,0c.32.24.53-.39.41-.76-1.62-4.94-6-8.67-10.92-10.35-5.25-1.8-12.83-2.29-17.63.85a24.85,24.85,0,0,0-9.77,12.34c-.6,1.66-1,3.38-1.75,5a7.74,7.74,0,0,1-3.42,3.88,4.23,4.23,0,0,1-4.87-.7A6,6,0,0,0,40,43.18l.14,3.11a6,6,0,0,1,3.2,3.26c1.11-1.94.76-4.43,1.73-6.45.82-1.71,2.57-3,2.7-4.92C48,35.4,44.52,33,51,29.42a1.11,1.11,0,0,1,.47-.14c2.19-.1,4.12,1.31,6.06,2.35a17.12,17.12,0,0,0,10.75,1.92,14.17,14.17,0,0,0,9.26-5.62,16.36,16.36,0,0,0-.67,7.24c.4,2.42,1.58,4.63,2.54,6.89a15.56,15.56,0,0,1,1.7,6.14.29.29,0,0,0,.55.16c.3-.51.52-1.06.79-1.61a14,14,0,0,0,.9-2.24,20.25,20.25,0,0,0-.7-13.43,1.59,1.59,0,0,1-.19-.79c.07-.68,1-.95,1.61-.64a3.17,3.17,0,0,1,1.23,1.57,4.49,4.49,0,0,0-4.32-6Z" fill="#7f500b" stroke="#020202" stroke-miterlimit="10" stroke-width="0.75"/><path data-name="mouth" d="M54.58,64.56a4.57,4.57,0,0,1,2.36,1.78,8.5,8.5,0,0,0,4.4,2.94c2.45.63,3.6.84,3.35,2.1s-2.15,1.71-3.35,2.22a8,8,0,0,1-5.85-.95,4.92,4.92,0,0,1-2.24-3.46C52.8,67.39,53.14,63.82,54.58,64.56Z" fill="#ffffff" stroke="#020202" stroke-miterlimit="10" stroke-width="0.75"/></g></svg>',
  },\n  /** fs-placeholder */`
  )
)

// 生成pages
fs.outputFileSync(
  `./src/module/${name}/index.html`,
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${cname}</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/module/${name}/app.ts"></script>
  </body>
</html>
`
)

// 生成 app.ts
fs.outputFileSync(
  `./src/module/${name}/app.ts`,
  `import { createApp } from 'vue'
import App from './app.vue'

import 'ant-design-vue/es/message/style/index'

const app = createApp(App)
app.mount('#app')\n`
)

// 生成 helper.ts
fs.outputFileSync(`./src/module/${name}/helper.ts`, `export {}\n`)

// 生成 helper.ts
fs.outputFileSync(
  `./src/module/${name}/interface.ts`,
  `export interface Example {
  label: string
  value: string
}\n`
)

// 生成 app.vue
fs.outputFileSync(
  `./src/module/${name}/app.vue`,
  `<script lang="ts" setup>
import type { Example } from './interface'

import { ref } from 'vue'
import { message } from 'ant-design-vue'

// 获取channel
import { useChannel } from '../../shared/use'
const { send: api__example } = useChannel('qmai.${name}.example')

const num = ref(1)

const onExample = async () => {
  const response = await api__example<number, Example>(num.value)
  message.info(JSON.stringify(response, null, 4))
}
</script>

<template>
  <br />

  <a-button type="primary" @click="onExample">测试</a-button>
</template>

<style>
body {
  background-color: #22272f !important;
}
</style>\n`
)

// 生成 extension.ts
fs.outputFileSync(
  `./src/module/${name}/extension.ts`,
  `import * as vscode from 'vscode'
import Channel from '@luozhu/vscode-channel'
import type { Example } from './interface'
import type { IResult } from '../../shared/interface'
import { activedPanelMap, createPanel } from '../../shared'
import { Result } from '../../shared/result'


const command = 'qmai.${name}'

export default (context: vscode.ExtensionContext) => {
  // 注册事件
  vscode.commands.registerCommand(command, () => {
    // 是否处于激活状态
    const isActive = activedPanelMap.has(command)

    // isTrue
    if (isActive) {
      // 重新聚焦
      activedPanelMap.get(command)?.reveal(vscode.ViewColumn.Active, true)
      return
    }

    const panel = createPanel({ command, title: '${cname}', pages: 'src/module/${name}/index.html', context })

    // 创建channel
    const channel = new Channel(context, panel)

    // 接收“示例”指令
    channel.bind<number, IResult<Example>>('qmai.${name}.example', (num) => {
      console.log(\`接收到了webview传递过来的数据 ==> \${num}\`)
      return Result.success({ label: '这里是label', value: '88888888' })
    })
  })
}\n`
)

const extensionContent = fs.readFileSync('./src/extension.ts', 'utf-8')
fs.writeFileSync(
  `./src/extension.ts`,
  extensionContent
    .replace('/** placeholder - 1 */', `import init${name} from './module/${name}/extension'\n/** placeholder - 1 */`)
    .replace('/* placeholder - 2 */', `init${name}(context)\n  /* placeholder - 2 */`)
)

await $`pnpm run build-view`
