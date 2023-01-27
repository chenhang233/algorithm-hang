/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (s.length < 2) {
    return 0
  }
  const db = Array.from({ length: s.length - 1 }, () => 0)
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        db[i] = db[i - 2] ? db[i - 2] + 2 : 2
      } else if (s[i - 1] === ')' && s[i - db[i - 1] - 1] === '(') {
        let ptev = db[i - db[i - 1] - 2] ?? 0
        db[i] = db[i - 1] + 2 + ptev
      }
    }
  }
  db.sort((a, b) => a - b)
  return db[db.length - 1]
}
