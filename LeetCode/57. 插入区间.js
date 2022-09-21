/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.push(newInterval)
  intervals.sort((a, b) => a[0] - b[0])
  const res = []
  let begin = intervals[0][0]
  let end = intervals[0][1]
  for (let i = 1; i < intervals.length; ++i) {
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
