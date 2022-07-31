var letterCombinations = function (digits) {
  let res = []
  let len = digits.length //要匹配的结果长度

  // 按键对应的字母
  const arr = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

  if (len === 0) return res
  if (len === 1) return arr[digits].split('')

  // 用来存储 路径
  let path = []
  // 数字串 数字长度 索引
  backtrack(digits, len, 0)
  return res

  // 回溯函数
  function backtrack(digits, len, i) {
    // 1.终止条件 有几个数字输出的数组每一项就有几个字母
    if (path.length === len) {
      console.log(path)
      res.push(path.join(''))
      return
    }
    // 2.遍历
    for (const v of arr[digits[i]]) {
      // 3.标记
      path.push(v)
      // 4.递归
      backtrack(digits, len, i + 1)
      // 5.撤回标记
      path.pop()
    }
  }
}

console.log(letterCombinations('23'))
