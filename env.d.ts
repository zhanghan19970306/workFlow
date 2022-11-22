/// <reference types="vite/client" />

declare module 'vue-json-viewer'

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

interface Window {
  __SSR_DATA__: Record<string, unknown>
}

declare const acquireVsCodeApi: () => {
  postMessage: (data: string | Record<string, unknown>) => void
}

// declare namespace vscode {
//   interface Memento {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     update(key: keyof typeof StorageKeyEnum, value: any): Thenable<void>
//   }
// }
