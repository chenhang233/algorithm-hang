/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
  let count = 0
  for (let i = 0; i < nums.length - 2; i++) {
    let t1 = nums[i],
      t2,
      t3
    for (let j = i + 1; j < nums.length - 1; j++) {
      t2 = nums[j]
      for (let k = j + 1; k < nums.length; k++) {
        t3 = nums[k]
        if (t1 !== t2 && t1 !== t3 && t2 !== t3) {
          count++
        }
      }
    }
  }
  return count
}

unequalTriplets([4, 4, 2, 4, 3])
unequalTriplets([1, 1, 1, 1, 1])
console.log(unequalTriplets([1, 3, 1, 2, 4]))
