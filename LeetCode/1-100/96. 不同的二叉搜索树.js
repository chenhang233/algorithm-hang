/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const db = Array.from({ length: n + 1 }, (_, i) => 0)
  db[0] = 1
  db[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      db[i] += db[j - 1] * db[i - j]
    }
  }
  return db[n]
}
