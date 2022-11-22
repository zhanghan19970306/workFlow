import boxen from 'boxen'

// 强制开启子进程颜色 See: https://www.npmjs.com/package/supports-color
process.env.FORCE_COLOR = 3

const boxenMap = new Map([
  ['success', { title: '成功', borderColor: 'green' }],
  ['info', { title: '信息', borderColor: 'blue' }],
  ['warn', { title: '警告', borderColor: 'yellow' }],
  ['error', { title: '异常', borderColor: 'red' }],
])

// console对象直接挂在boxen方法
console.boxen = (type, text) => {
  const { title, borderColor } = boxenMap.get(type)
  const options = {
    margin: { top: 1, bottom: 1 },
    padding: { left: 1, right: 1 },
    borderStyle: 'double',
    borderColor,
    title: `小助手 - ${title}`,
  }
  console.log(`\n${boxen(text, options)}`)
}

// example: conosle.boxen.success
;[...boxenMap.keys()].forEach(type => (console.boxen[type] = text => console.boxen(type, text)))
