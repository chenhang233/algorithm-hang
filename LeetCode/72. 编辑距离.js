/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const dp = Array.from({ length: word1.length + 1 }, () =>
    Array.from({ length: word2.length + 1 }, () => 0)
  )
  for (let i = 1; i < dp[0].length; i++) {
    dp[0][i] = i
  }
  for (let j = 1; j < dp.length; j++) {
    dp[j][0] = j
  }
  for (let k = 1; k < dp.length; k++) {
    for (let q = 1; q < dp[k].length; q++) {
      const left = dp[k - 1][q] + 1
      const down = dp[k][q - 1] + 1
      let left_down = dp[k - 1][q - 1]
      if (word1.charAt(k - 1) !== word2.charAt(q - 1)) {
        left_down += 1
      }
      dp[k][q] = Math.min(left, down, left_down)
    }
  }
  return dp[word1.length][word2.length]
}
