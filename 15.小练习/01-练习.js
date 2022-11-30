const str = 'aabbcc'

// 方法1 数组reverse
function fn(str) {
  return str.split('').reverse().join('')
}
console.log(fn(str))
// 方法2 使用字符串 charAt
function fn2(str) {
  let res = ''
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i]
  }
  return res
}
console.log(fn2(str))
// 方法3 递归
function fn3(str, i, out) {
  if (i <= 0) {
    return out
  }
  i--
  out += str[i]
  return fn3(str, i, out)
}
console.log(fn3(str, str.length, ''))
// 方法4 使用 call
function fn4(str) {
  return Array.prototype.slice.call(str).reverse().join('')
}

console.log(fn4(str))
