/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = []
  const recall = (target, combine, index) => {
    if (index === candidates.length) {
      return
    }
    if (target === 0) {
      return ans.push(combine)
    }
    recall(target, combine, index + 1)
    if (target - candidates[index] >= 0) {
      recall(target - candidates[index], [...combine, candidates[index]], index)
    }
  }
  recall(target, [], 0)
  return ans
}
