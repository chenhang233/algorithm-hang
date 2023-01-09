/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 超时
 */
var maxKelements = function (nums, k) {
  const map = {}
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i]
    map[number] ? map[number]++ : (map[number] = 1)
  }
  for (let i = 0; i < k; i++) {
    let max = 0
    for (const key in map) {
      if (parseInt(key) > parseInt(max)) max = key
    }
    result += parseInt(max)
    if (--map[max] == 0) delete map[max]
    const newkey = Math.ceil(max / 3)
    map[newkey] ? map[newkey]++ : (map[newkey] = 1)
  }
  return result
}

console.log(
  maxKelements([1, 10, 3, 3, 3], 3),
  maxKelements([10, 10, 10, 10, 10], 5)
)
