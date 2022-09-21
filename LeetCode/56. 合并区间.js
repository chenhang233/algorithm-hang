/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const n = intervals.length
  const res = []
  intervals.sort((a, b) => a[0] - b[0])
  let begin = intervals[0][0]
  let end = intervals[0][1]
  for (let i = 1; i < n; ++i) {
    if (intervals[i][0] > end) {
      res.push([begin, end])
      begin = intervals[i][0]
      end = intervals[i][1]
    } else {
      end = Math.max(end, intervals[i][1])
    }
  }
  res.push([begin, end])
  return res
}
