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
