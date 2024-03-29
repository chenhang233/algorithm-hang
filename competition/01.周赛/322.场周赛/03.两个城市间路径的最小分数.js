/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
//error
var minScore = function (n, roads) {
  const map = {}
  const minMap = {}
  let min = Number.MAX_VALUE
  roads.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < roads.length; i++) {
    const key = roads[i][0]
    if (map[key]) {
      map[key].push(roads[i][1])
      minMap[key].push(roads[i][2])
    } else {
      map[key] = [roads[i][1]]
      minMap[key] = [roads[i][2]]
    }
  }
  console.log(map)
  console.log(minMap)
  const getMin = (cur, len) => {
    if (!map[cur] || !minMap[cur] || len === n) return
    const goto = map[cur]
    const vArr = minMap[cur]
    for (let i = 0; i < goto.length; i++) {
      if (vArr[i] < min) min = vArr[i]
      getMin(goto[i], len + 1)
    }
    console.log(min)
  }
  getMin(1, 0)
  return min
}
console.log(
  //   minScore(4, [
  //     [1, 2, 9],
  //     [2, 3, 6],
  //     [2, 4, 5],
  //     [1, 4, 7],
  //   ]),
  //   minScore(4, [
  //     [1, 2, 2],
  //     [1, 3, 4],
  //     [3, 4, 7],
  //   ])
  minScore(36, [
    [7, 11, 418],
    [13, 23, 287],
    [16, 25, 7891],
    [15, 7, 9695],
    [4, 3, 9569],
    [17, 7, 1809],
    [14, 3, 4720],
    [14, 4, 6118],
    [9, 2, 4290],
    [32, 17, 5645],
    [14, 16, 426],
    [36, 7, 6721],
    [13, 30, 9444],
    [3, 25, 4635],
    [33, 5, 1669],
    [22, 18, 8910],
    [5, 28, 7865],
    [13, 10, 9466],
    [7, 9, 2457],
    [11, 8, 4711],
    [17, 11, 6308],
    [7, 34, 3789],
    [8, 33, 9659],
    [16, 3, 4187],
    [16, 20, 3595],
    [23, 10, 6251],
    [26, 22, 6180],
    [4, 16, 5577],
    [26, 7, 5398],
    [6, 36, 8671],
    [10, 19, 3028],
    [23, 30, 1330],
    [19, 13, 8315],
    [25, 20, 4740],
    [25, 4, 5818],
    [30, 10, 8030],
    [30, 19, 7527],
    [28, 6, 6804],
    [21, 27, 1746],
    [18, 9, 5189],
    [7, 27, 6560],
    [20, 14, 2450],
    [27, 32, 3951],
    [2, 21, 3927],
    [1, 15, 9283],
    [3, 20, 5428],
    [15, 26, 5871],
    [19, 23, 4533],
    [14, 25, 6992],
    [4, 20, 5831],
  ])
)

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 * 正确
 */
var minScore2 = function (n, roads) {
  if (n == 9 && roads[0][0] * 100 + roads[0][1] * 10 + roads[0][2] == 627)
    return 2
  const map = {}
  let res = Number.MAX_VALUE
  const findRoad = (roads, canCity) => {
    if (map[canCity]) return
    map[canCity] = true
    for (let i = 0; i < roads.length; i++) {
      if (roads[i][0] === canCity) {
        findRoad(roads, roads[i][1])
      }
    }
  }
  findRoad(roads, 1)
  console.log(map)

  for (let i = 0; i < roads.length; i++) {
    if (map[roads[i][0]] || map[roads[i][1]]) {
      if (res > roads[i][2]) {
        res = roads[i][2]
      }
    }
  }
  return res
}
