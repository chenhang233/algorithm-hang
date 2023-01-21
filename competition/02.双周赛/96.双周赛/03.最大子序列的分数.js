/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 * 超时
 */
var maxScore = function (nums1, nums2, k) {
  let res = 0
  const findAll = (cur, i) => {
    if (cur.length === k) {
      let min = nums2[cur[0]]
      let score = nums1[cur[0]]
      for (let index = 1; index < cur.length; index++) {
        if (nums2[cur[index]] < min) min = nums2[cur[index]]
        score += nums1[cur[index]]
      }
      const t = min * score
      if (t > res) res = t
      return
    }
    for (let j = i; j < nums1.length; j++) {
      cur.push(j)
      j++
      findAll(cur, j)
      j--
      cur.pop()
    }
  }
  findAll([], 0)
  return res
}

console.log(maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3))
console.log(maxScore([4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1))
