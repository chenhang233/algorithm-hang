/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const db = Array.from({ length: n + 1 }, () => 0)
  db[1] = 1
  db[2] = 2
  for (let i = 3; i < db.length; i++) {
    db[i] = db[i - 1] + db[i - 2]
  }
  return db[n]
}
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs2 = function (n) {
  const db = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    db[i] = db[i - 1] + db[i - 2]
  }
  return db[n]
}
