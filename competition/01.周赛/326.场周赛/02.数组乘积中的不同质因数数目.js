/**
 * @param {number[]} nums
 * @return {number}
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

console.log(distinctPrimeFactors([2, 4, 3, 7, 10, 6]))
