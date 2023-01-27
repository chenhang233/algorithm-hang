/**
 * @param {number} n
 * @return {number}
 */
var numTilings2 = function (n) {
  const mod = 1e9 + 7
  const db = Array.from({ length: n + 1 }, () =>
    Array.from({ length: 4 }, () => 0)
  )
  db[0][3] = 1
  for (let i = 1; i <= n; i++) {
    db[i][0] = db[i - 1][3]
    db[i][1] = (db[i - 1][0] + db[i - 1][2]) % mod
    db[i][2] = (db[i - 1][0] + db[i - 1][1]) % mod
    db[i][3] = (db[i - 1][0] + db[i - 1][1] + db[i - 1][2] + db[i - 1][3]) % mod
  }
  console.log(db)
  return db[n][3]
}
numTilings2(3)
