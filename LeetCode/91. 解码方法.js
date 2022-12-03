/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const n = s.length
  const db = Array.from({ length: n + 1 }, () => 0)
  db[0] = 1
  for (let i = 1; i <= n; i++) {
    if (s[i - 1] != '0') {
      db[i] += db[i - 1]
    }
    if (i > 1 && s[i - 2] != '0' && s[i - 2] * 10 + (s[i - 1] - 0) <= 26) {
      db[i] += db[i - 2]
    }
  }
  return db[n]
}
