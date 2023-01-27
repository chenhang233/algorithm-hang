/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = []
  const backtrack = (path) => {
    if (path.length === k) return res.push([...path])
    A: for (let i = n; i > 0; i--) {
      for (let j = 0; j < path.length; j++) {
        if (path[j] === i) break A
      }
      path.push(i)
      backtrack(path)
      path.pop(i)
    }
  }
  backtrack([])
  return res
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine2 = function (n, k) {
  const res = []
  const bfs = (c, temp) => {
    if (temp.length + (n - c + 1) < k) {
      return
    }
    if (temp.length === k) return res.push(temp)
    bfs(c + 1, [...temp, c])
    bfs(c + 1, temp)
  }
  bfs(1, [])
  return res
}

combine2(4, 3)
