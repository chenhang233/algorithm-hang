// /**
//  * @param {number} low
//  * @param {number} high
//  * @param {number} zero
//  * @param {number} one
//  * @return {number}
//  */
// var countGoodStrings = function (low, high, zero, one) {
//   const res = []
//   const track = (arr) => {
//     if (arr.length > high) return
//     if (arr.length >= low && arr.length <= high) return res.push([...arr])
//     const arr1 = arr.concat(Array.from({ length: zero }, () => 0))
//     track(arr1)
//     const arr2 = arr.concat(Array.from({ length: one }, () => 1))
//     track(arr2)
//     const arr3 = [...arr1, ...arr2]
//     track(arr3)
//   }

//   track([])
//   const good = res.length % (1e9 + 7)
//   return good
// }

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

countGoodStrings(3, 6, 1, 1)
