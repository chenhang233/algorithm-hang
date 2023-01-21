/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums1, nums2, k) {
  const n1All = nums1.reduce((a, v) => (a += v), 0)
  const n2All = nums2.reduce((a, v) => (a += v), 0)
  if (n1All !== n2All) return -1
  const n = nums1.length
  let sum = 0
  for (let i = 0; i < n; i++) {
    if (nums1[i] > nums2[i]) {
      for (let j = 0; j < n; j++) {
        if (nums1[j] < nums2[j]) {
          sum++
          nums1[j] += k
          nums1[i] -= k
          break
        }
      }
    }
  }
  console.log(nums1, nums2)
  return sum
}

console.log(
  //   minOperations([4, 3, 1, 4], [1, 3, 7, 1], 3), // 2
  //   minOperations([3, 8, 5, 2], [2, 4, 1, 6], 3), // -1
  //   minOperations([2, 4], [4, 2], 3), // 1
  minOperations([13, 6, 10, 16], [1, 16, 12, 16], 3) // 6
)
