/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let str = '1'
  for (let i = 2; i <= n; i++) {
    let position = 0
    let start = 0
    const db = []
    while (position < str.length) {
      while (str[position] === str[start]) {
        position++
      }
      db.push('' + (position - start) + str[start])
      start = position
    }
    str = db.join('')
  }
  return str
}
