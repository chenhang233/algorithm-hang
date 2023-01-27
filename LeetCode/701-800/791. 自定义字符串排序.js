/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  let i = 0
  let res = ''
  let other = ''
  for (let i = 0; i < order.length; i++) {
    let flag = false
    for (let j = 0; j < s.length; j++) {
      if (s[j] === order[i]) {
        res += s[j]
        flag = true
      }
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (!res.includes(s[i])) other += s[i]
  }
  return res + other
}
//"kqeep"
customSortString('kqep', 'pekeq')

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString2 = function (order, s) {
  const sortArr = Array.from({ length: 26 }, () => 0)
  for (let i = 0; i < order.length; i++) {
    sortArr[order[i].charCodeAt() - 'a'.charCodeAt()] = i + 1
  }
  const arr = s.split('')
  arr.sort(
    (a, b) =>
      sortArr[a.charCodeAt() - 'a'.charCodeAt()] -
      sortArr[b.charCodeAt() - 'a'.charCodeAt()]
  )
  return arr.join('')
}
