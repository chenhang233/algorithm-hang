/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  const getStep = (num, step) => {
    if (num === 0) {
      return step
    }
    let leftover = num % 2
    let sum = Math.floor(num / 2)
    if (leftover) {
      return getStep(num - 1, step + 1)
    }
    return getStep(sum, step + 1)
  }
  const step = getStep(num, 0)
  return step
}
