/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function (n) {
  n = Math.ceil(n / 25)
  if (n >= 179) return 1
  const db = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  )
  db[0][0] = 0 + 1.0 / 2
  for (let i = 1; i <= n; i++) {
    db[0][i] = 1.0 + 0 / 2
  }
  console.log(n)
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      const a = Math.max(0, i - 4)
      const b = Math.max(0, i - 3)
      const b2 = Math.max(0, j - 1)
      const c = Math.max(0, i - 2)
      const c2 = Math.max(0, j - 2)
      const d = Math.max(0, i - 1)
      const d2 = Math.max(0, j - 3)
      db[i][j] = (db[a][j] + db[b][b2] + db[c][c2] + db[d][d2]) / 4.0
    }
  }
  return db[n][n]
}
