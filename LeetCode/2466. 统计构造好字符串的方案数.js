/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
  const db = Array.from({ length: high + 1 }, () => 0)
  db[0] = 1
  const min = Math.min(zero, one)
  const mod = 10 ** 9 + 7
  for (let i = min; i <= high; i++) {
    if (i >= zero) db[i] = (db[i] + db[i - zero]) % mod
    if (i >= one) db[i] = (db[i] + db[i - one]) % mod
  }
  return db.slice(low).reduce((a, v) => (a + v) % mod, 0)
}
