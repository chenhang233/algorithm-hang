/**
 * @param {number[]} nums
 * @return {number}
 * 超时
 */
var distinctPrimeFactors = function (nums) {
  const reduce = nums.reduce((a, v) => (a *= v), 1)
  let s = ''
  let count = 0
  const map = {}
  const primeNum = (n, m, result) => {
    console.log(n, m, result)
    if (n < m) s = result
    else {
      if (n % m == 0) {
        primeNum(n / m, m, result + m + ' ')
      } else primeNum(n, m + 1, result)
    }
  }
  primeNum(reduce, 2, '')
  s.split(' ').forEach((s) => {
    if (s && !map[s]) {
      map[s] = true
      count++
    }
  })
  return count
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors2 = function (nums) {
  const search = (n) => {
    let i = 2
    const map = {}
    while (n >= i) {
      if (n % i === 0) {
        map[i] = 1
        n /= i
      } else {
        i++
      }
    }
    return map
  }
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const obj = search(nums[i])
    for (const key in obj) {
      map.set(key, obj[key])
    }
  }
  let res = 0
  map.forEach((v, k) => {
    res += v
  })
  return res
}

console.log(distinctPrimeFactors2([2, 4, 3, 7, 10, 6]))
