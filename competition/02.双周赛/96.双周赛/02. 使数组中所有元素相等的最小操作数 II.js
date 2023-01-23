/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums1, nums2, k) {
  if (k === 0) {
    return nums1.toString() === nums2.toString() ? 0 : -1
  }
  let sum1 = 0,
    sum2 = 0
  for (let i = 0; i < nums1.length; i++) {
    let temp = nums2[i] - nums1[i]
    if (temp % k !== 0) return -1
    if (temp > 0) {
      sum1 += temp / k
    } else if (temp < 0) {
      sum2 += -temp / k
    }
  }
  return sum1 === sum2 ? sum1 : -1
}

console.log(
  minOperations([4, 3, 1, 4], [1, 3, 7, 1], 3) // 2
  //   minOperations([3, 8, 5, 2], [2, 4, 1, 6], 3), // -1
  //   minOperations([2, 4], [4, 2], 3), // 1
  // minOperations([13, 6, 10, 16], [1, 16, 12, 16], 3) // 6
)
