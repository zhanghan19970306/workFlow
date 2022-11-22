import * as vscode from 'vscode'
import { fetch, fs, path } from 'zx'
import dayjs from 'dayjs'
import { INNER_SITE } from './config'

export async function activate(context: vscode.ExtensionContext) {
  // TODO: 这里是example
  context.subscriptions.push(
    vscode.commands.registerCommand('qmai.nav', async () => {
      // 创建和显示webview
      const panel = vscode.window.createWebviewPanel('qmai.nav', '编程导航', vscode.ViewColumn.One, {
        enableFindWidget: true,
        enableCommandUris: true,
        enableScripts: true,
        retainContextWhenHidden: true,
      })

      // 面板图标
      panel.iconPath = vscode.Uri.joinPath(context.extensionUri, 'resources', 'logo.svg')

      const isProd = false

      if (isProd) {
        // 获取html
        const { fsPath } = vscode.Uri.joinPath(context.extensionUri, './dist/views/src/module/nav/index.html')
        const html = fs.readFileSync(fsPath, 'utf-8')
        const lastHtml = html.replace(
          /(<link.+?href="|<script.+?src="|<img.+?src=")(.+?)"/g,
          (_, $1, $2) =>
            `${$1}${panel.webview.asWebviewUri(
              vscode.Uri.file(path.join(context.extensionPath, 'dist/views', $2.replace('../../../', '')))
            )}"`
        )
        // 设置HTML内容
        panel.webview.html = lastHtml
      } else {
        const { fsPath } = vscode.Uri.joinPath(context.extensionUri, './src/module/nav/index.html')
        const html = fs.readFileSync(fsPath, 'utf-8')
        const lastHtml = html.replace(
          /(<link.+?href="|<script.+?src="|<img.+?src=")(.+?)"/g,
          (_, $1, $2) => `${$1}http://localhost:5173${$2}"`
        )
        panel.webview.html = lastHtml
      }
    })
  )
}
