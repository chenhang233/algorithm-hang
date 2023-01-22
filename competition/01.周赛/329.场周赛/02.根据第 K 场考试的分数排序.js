/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  const map = {}
  const arr = []
  const result = []
  for (let i = 0; i < score.length; i++) {
    const ek = score[i][k]
    map[ek] = i
    arr.push(ek)
  }
  arr.sort((a, b) => b - a)
  arr.forEach((v, i) => {
    result[i] = score[map[v]]
  })
  return result
}

console.log(
  sortTheStudents(
    [
      [10, 6, 9, 1],
      [7, 5, 11, 2],
      [4, 8, 3, 15],
    ],
    2
  ),

  sortTheStudents(
    [
      [3, 4],
      [5, 6],
    ],
    0
  )
)
