/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const balls = highLimit - lowLimit + 1
  const arr = Array.from({ length: balls }, (_, i) =>
    i + lowLimit > 9
      ? (i + lowLimit)
          .toString()
          .split('')
          .reduce((p, c) => (p += parseInt(c)), 0)
      : i + lowLimit
  )
  let count = 1
  let all = []
  arr.sort((a, b) => a - b)
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++
    } else {
      all.push(count)
      count = 1
    }
  }
  let max = 0
  for (let i = 0; i < all.length; i++) {
    all[i] > max && (max = all[i])
  }
  return max
}

/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls2 = function (lowLimit, highLimit) {
  const map = new Map()
  let res = 0
  for (let i = lowLimit; i <= highLimit; i++) {
    let box = 0,
      j = i
    while (j !== 0) {
      box += j % 10
      j = Math.floor(j / 10)
    }
    map.set(box, (map.get(box) || 0) + 1)
    const r = map.get(box)
    res < r && (res = r)
  }
  return res
}
