/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let str = ''
  let resultStr = ''
  if (s.length === 1 || s.length === 0) {
    resultStr = s
    return resultStr
  }
  if (s.length === 2) {
    let [a, b] = s.split('')
    if (a === b) {
      resultStr = s
    } else {
      resultStr = a
    }
    return resultStr
  }
  let strArr = s.split('')
  if (strArr.every((v) => v === strArr[0])) {
    return (resultStr = s)
  }
  for (let i = 1; i < s.length; ++i) {
    let j = 1
    str = strArr[i]
    while (
      strArr[i - j] === strArr[i + j] &&
      strArr[i - j] !== undefined &&
      strArr[i + j] !== undefined
    ) {
      str = strArr[i - j] + str + strArr[i + j]
      if (resultStr.length < str.length) {
        resultStr = str
      }
      j++
    }
    if (strArr[i - j] !== strArr[i + j]) {
      console.log(strArr[i - j], strArr[i + j])
      if (strArr[i] === strArr[i - j]) {
        let temp = strArr[i] + strArr[i - j]
        console.log(temp, strArr[i], strArr[i - j], 'temp')
        test(i, i - j)
        if (temp.length > resultStr.length) {
          resultStr = temp
        }
      }
      if (strArr[i] === strArr[i + j]) {
        let temp = strArr[i] + strArr[i + j]
        test(i, i - j)
        if (temp.length > resultStr.length) {
          resultStr = temp
        }
      }
    }
  }
  function test(leftP, rightP) {
    let middle = ''
    let j = 1
    while (
      strArr[leftP - j] === strArr[rightP + j] &&
      strArr[leftP - j] !== undefined &&
      strArr[rightP + j] !== undefined
    ) {
      middle = strArr[leftP - j] + middle + strArr[rightP + j]
      if (resultStr.length < middle.length) {
        resultStr = middle
      }
      j++
    }
  }
  if (resultStr === '') {
    resultStr = str
  }
  return resultStr
}

console.log(longestPalindrome('babad'))
