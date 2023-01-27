/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  const checkIfSimilar = (i1, i2, length, s1, s2) => {
    const map = new Map()
    for (let i = i1; i < i1 + length; i++) {
      map.set(s1[i], (map.get(s1[i]) || 0) + 1)
    }
    for (let i = i2; i < i2 + length; i++) {
      map.set(s2[i], (map.get(s2[i]) || 0) - 1)
    }
    for (const v of map.values()) {
      if (v !== 0) {
        return false
      }
    }
    return true
  }
  const dfs = (i1, i2, length, s1, s2, memo) => {
    if (memo[i1][i2][length] !== 0) {
      return memo[i1][i2][length] === 1
    }
    if (s1.slice(i1, i1 + length) === s2.slice(i2, i2 + length)) {
      memo[i1][i2][length] = 1
      return true
    }
    if (!checkIfSimilar(i1, i2, length, s1, s2)) {
      memo[i1][i2][length] = -1
      return false
    }
    for (let i = 1; i < length; i++) {
      if (
        dfs(i1, i2, i, s1, s2, memo) &&
        dfs(i1 + i, i2 + i, length - i, s1, s2, memo)
      ) {
        memo[i1][i2][length] = 1
        return true
      }
      if (
        dfs(i1, i2 + length - i, i, s1, s2, memo) &&
        dfs(i1 + i, i2, length - i, s1, s2, memo)
      ) {
        memo[i1][i2][length] = 1
        return true
      }
    }
    memo[i1][i2][length] = -1
    return false
  }
  const length = s1.length
  const memo = Array.from({ length }, () =>
    Array.from({ length }, () => Array.from({ length: length + 1 }, () => 0))
  )
  return dfs(0, 0, length, s1, s2, memo)
}
