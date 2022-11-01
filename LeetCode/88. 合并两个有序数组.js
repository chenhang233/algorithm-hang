/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (!n) return
  let i = m
  let j = 0
  while (i < nums1.length) {
    nums1[i++] = nums2[j++]
  }
  console.log(nums1, 'nums1')
  for (let i = 1; i < nums1.length; i++) {
    let tempNum = nums1[i]
    let j = i
    while (j > 0 && tempNum < nums1[j - 1]) {
      nums1[j] = nums1[j - 1]
      j--
    }
    nums1[j] = tempNum
  }
}

merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)
