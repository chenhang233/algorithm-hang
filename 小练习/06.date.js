const a = new Date('2022-1-1')
// replace(/\//g,)
let k = a
  .toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  .replace(/\//g, '')
console.log(k)
