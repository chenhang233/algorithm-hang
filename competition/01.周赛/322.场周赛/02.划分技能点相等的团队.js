//  n/ 2 = a
// a所有 * a = n的所有

/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  const n = skill.length
  const group = n / 2
  const all = skill.reduce((a, v) => (a += v), 0)
  const average = all / group
  skill.sort((a, b) => a - b)
  const middle = n / 2
  let res = 0
  for (let i = 0; i < middle; i++) {
    const a = skill[i]
    const b = skill[n - i - 1]
    if (a + b !== average) return -1
    res += a * b
  }
  return res
}
console.log(
  dividePlayers([3, 2, 5, 1, 3, 4]),
  dividePlayers([3, 4]),
  dividePlayers([1, 1, 2, 3]),
  dividePlayers([2, 1, 5, 2])
)
