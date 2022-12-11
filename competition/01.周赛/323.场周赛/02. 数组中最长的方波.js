/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
  const map = new Map()
  const prev = {}
  nums.forEach((v) => (prev[v] = 1))
  const exist = {}
  const used = {}
  let max = -1
  nums.forEach((v) => {
    exist[v] = 1
    let k = Math.pow(v, 0.5)
    while (k % 1 === 0 && !used[v] && prev[k]) {
      map.set(k, map.get(k) ? map.get(k) + 1 : 1)
      k = Math.pow(k, 0.5)
    }
    used[v] = 1
  })
  map.forEach((v, k) => {
    if (v > max && exist[k]) max = v
  })
  return max === -1 ? -1 : max + 1
}

console.log(
  longestSquareStreak([4, 3, 6, 16, 8, 2]),
  longestSquareStreak([2, 3, 5, 6, 7]),
  longestSquareStreak([2, 4, 4, 2]),
  longestSquareStreak([10, 2, 13, 16, 8, 9, 13])
)
// 3 -1 2 -1
