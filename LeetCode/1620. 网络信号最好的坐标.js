/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function (towers, radius) {
  const s = (areaXY, tower) => {
    return (
      (tower[0] - areaXY[0]) * (tower[0] - areaXY[0]) +
      (tower[1] - areaXY[1]) * (tower[1] - areaXY[1])
    )
  }
  let maxX = Number.MIN_VALUE,
    maxY = Number.MIN_VALUE
  for (let [x, y] of towers) {
    if (maxX < x) maxX = x
    if (maxY < y) maxY = y
  }
  let resX = 0,
    resY = 0
  let maxcapacity = 0
  for (let i = 0; i <= maxX; i++) {
    for (let j = 0; j <= maxY; j++) {
      let capacity = 0
      const areaXY = [i, j]
      for (let tower of towers) {
        const area = s(areaXY, tower)
        if (area <= radius * radius) {
          capacity += Math.floor(tower[2] / (1 + Math.sqrt(area)))
        }
      }
      if (capacity > maxcapacity) {
        maxcapacity = capacity
        resX = i
        resY = j
      }
    }
  }
  return [resX, resY]
}
