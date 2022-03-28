const str = 'aabbababc'
// 方法一: 使用key-value
function fn(str) {
  const obj = {}
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1
    } else {
      obj[str[i]]++
    }
  }
  let num = 0
  let chart = ''
  for (let key in obj) {
    if (obj[key] > num) {
      num = obj[key]
      chart = key
    }
  }
  return { num, chart }
}

// console.log(fn(str))

// 方法二:  通过lastIndexOf

function fn2(str) {
  str = str.split('').sort().join('')
  let maxCount = 0
  let maxChar = ''
  for (let i = 0; i < str.length; i++) {
    let char = str.lastIndexOf(str[i]) - i + 1
    if (char > maxCount) {
      maxCount = char
      maxChar = str[i]
    }
    i = str.lastIndexOf(str[i])
  }
  return { maxChar, maxCount }
}
console.log(fn2(str))
