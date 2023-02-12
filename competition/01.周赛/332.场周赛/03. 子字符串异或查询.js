/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 */
var substringXorQueries = function (s, queries) {
  const res = []
  queries.forEach(([first, second], index) => {
    let left = 0,
      right = 0
    let flag = true
    while (right < s.length && left < s.length) {
      if (s[left] == 0) {
        left++
        right++
      }
      const t = parseInt(s.substring(left, right + 1), 2) ^ first
      if (second > t) {
        right++
      } else if (second < t) {
        left++
      } else {
        flag = false
        res[index] = [left, right]
        break
      }
    }
    if (flag) res[index] = [-1, -1]
  })
  console.log(res)
  return res
}

substringXorQueries('101101', [
  [0, 5],
  [1, 2],
])
substringXorQueries('0101', [[12, 8]])
substringXorQueries('1', [[4, 5]])
substringXorQueries('001', [
  [1, 0],
  [1, 0],
  [9, 8],
  [1, 0],
  [4, 5],
  [9, 8],
  [3, 2],
  [2, 3],
  [5, 4],
  [6, 7],
  [2, 3],
  [2, 3],
  [2, 3],
  [4, 5],
])
