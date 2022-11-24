/**
 * 超出时间限制
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function (n, a, b) {
  const max = 1000000007
  const arr = []
  let start = 1
  while (arr.length < n) {
    if (start % a === 0 || start % b === 0) arr.push(start)
    start++
  }
  return arr[n - 1] >= max ? arr[n - 1] % max : arr[n - 1]
}
// 官方
var nthMagicalNumber = function (n, a, b) {
  const MOD = 1000000007
  const gcd = (a, b) => {
    return b !== 0 ? gcd(b, a % b) : a
  }
  const lcm = (a, b) => {
    return Math.floor((a * b) / gcd(a, b))
  }
  let l = Math.min(a, b)
  let r = n * Math.min(a, b)
  const c = lcm(a, b)
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    const cnt = Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / c)
    if (cnt >= n) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return (r + 1) % MOD
}
