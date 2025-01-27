import * as vscode from 'vscode'
import { addEventListener, getSelection, registerCompletionItemProvider } from '@vscode-use/utils'
import { findPkgUI, parser } from './utils'
import UI from './ui'

let UINames: any = []
let optionsComponents: any = null
let UiCompletions: any = null
let cacheMap: any = {}
let extensionContext: any = null
export function activate(context: vscode.ExtensionContext) {
  extensionContext = context
  const filter = ['javascript', 'javascriptreact', 'typescriptreact', 'vue', 'svelte']
  context.subscriptions.push(addEventListener('activeText-change', (editor: vscode.TextEditor) => {
    // 找到当前活动的编辑器
    const visibleEditors = vscode.window.visibleTextEditors
    const currentEditor = visibleEditors.find(e => e === editor)
    if (currentEditor)
      findUI()
  }))

  findUI()

  context.subscriptions.push(registerCompletionItemProvider(filter, (document, position) => {
    const result = parser(document.getText(), position)
    if (!result)
      return
    if (UiCompletions && result?.type === 'props') {
      const name = result.tag[0].toUpperCase() + result.tag.replace(/(-\w)/g, (match: string) => match[1].toUpperCase()).slice(1)
      if (result.propName === 'icon')
        return UiCompletions.icons

      return result.propName === 'on'
        ? UiCompletions[name].events
        : UiCompletions[name].completions
    }
    const { lineText } = getSelection()!
    if (optionsComponents && lineText?.slice(-1)[0] !== ' ')
      return optionsComponents
  }, ['"', '\'', '-', ' ', '@']))
}

export function deactivate() {
  UINames = null
  optionsComponents = null
  UiCompletions = null
  cacheMap = null
}

const filters = ['js', 'ts', 'jsx', 'tsx', 'vue', 'svelte']

function findUI() {
  const cwd = vscode.window.activeTextEditor?.document.uri.fsPath
  const suffix = cwd?.split('.').slice(-1)[0]

  if (!suffix || !filters.includes(suffix))
    return

  const values = Object.values(cacheMap) as any
  if (values[0] && values[0].includes(cwd))
    return
  findPkgUI(cwd).then(({ uis, pkg }: any) => {
    if (!uis)
      return
    if (Object.keys(cacheMap).length) {
      if (!cacheMap[pkg]) {
        cacheMap = {}
        cacheMap[pkg] = []
      }
    }
    else if (!cacheMap[pkg]) {
      cacheMap[pkg] = []
    }
    cacheMap[pkg].push(cwd)
    const uisName: string[] = []
    uis.forEach(([uiName, version]: any) => {
      const _version = version.match(/[^~]?([0-9]+)./)![1]
      uisName.push(`${uiName.replace(/-(\w)/g, (_: string, v: string) => v.toUpperCase())}${_version}`)
    })
    if (uisName.every(name => UINames.includes(name)))
      return
    UINames = uisName

    optionsComponents = UINames.map((option: string) => `${option}Components`).reduce((result: any, name: string) => {
      const componentsNames = (UI as any)[name]?.()
      if (componentsNames)
        result.push(...componentsNames)
      return result
    }, [])
    UiCompletions = UINames.reduce((result: any, option: string) =>
      Object.assign(result, (UI as any)[option]?.(extensionContext))
    , {} as any)
  })
}
