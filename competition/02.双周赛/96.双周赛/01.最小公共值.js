/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let res = -1
  const map = {}
  for (const v of nums1) {
    if (!map[v]) {
      map[v] = 1
    }
  }
  for (const v of nums2) {
    if (map[v]) {
      if (res === -1) {
        res = v
      } else if (v < res) {
        res = v
      }
    }
  }
  return res
}

const nums1 = [1, 2, 3, 6],
  nums2 = [2, 3, 4, 5]
console.log(getCommon(nums1, nums2))
console.log(getCommon([1, 2, 3], [2, 4]))
console.log(getCommon([1], [2, 4]))
