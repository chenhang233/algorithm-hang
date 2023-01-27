/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [...nums1, ...nums2]
  arr.sort((a, b) => a - b)
  let length = arr.length
  let index = Math.floor(arr.length / 2)
  if (length % 2 === 0) {
    return (arr[index - 1] + arr[index]) / 2
  } else {
    return arr[index]
  }
}
