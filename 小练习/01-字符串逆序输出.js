const str = 'aabbcc'
// 方法1 数组reverse

function fn(str) {
  return str.split('').reverse().join('')
}
// console.log(fn(str))
// 方法2 使用字符串 charAt

function fn2(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result += str.charAt(i)
  }
  return result
}

// console.log(fn2(str))

// 方法3 递归

function fn3(str, i, output) {
  output += str.charAt(i)
  if (i <= 0) {
    return output
  }
  i--
  return fn3(str, i, output)
}
const res = fn3(str, str.length - 1, '')

// 方法4 使用 call

function fn4(str) {
  const arr = Array.prototype.slice.call(str)
  return arr.reverse().join('')
}

// console.log(fn4(str))
