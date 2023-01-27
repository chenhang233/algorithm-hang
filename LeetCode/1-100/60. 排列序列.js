/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  const res = []

  const backtrack = (index, path) => {
    if (index === n) {
      return res.push([...path])
    }
    for (let i = 1; i <= n; i++) {
      if (!path.includes(i)) {
        path.push(i)
        backtrack(index + 1, path)
        path.pop()
      }
    }
  }
  backtrack(0, [])
  return res[k - 1].join('')
}
