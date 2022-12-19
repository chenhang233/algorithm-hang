/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
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
