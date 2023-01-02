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
