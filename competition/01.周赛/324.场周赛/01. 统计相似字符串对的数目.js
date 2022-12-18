/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  const f_w = []
  let count = 0
  for (const key of words) {
    const used = {}
    let item = []
    for (let i = 0; i < key.length; i++) {
      let c = key[i]
      if (!used[c]) {
        item.push(c)
        used[c] = true
      }
    }
    item.sort((a, b) => a.charCodeAt() - b.charCodeAt())
    f_w.push(item.join(''))
  }
  for (let i = 0; i < f_w.length; i++) {
    let cur = f_w[i]
    for (let j = i + 1; j < f_w.length; j++) {
      if (cur === f_w[j]) count++
    }
  }
  return count
}

console.log(
  similarPairs(['aba', 'aabb', 'abcd', 'bac', 'aabc']),
  similarPairs(['aabb', 'ab', 'ba']),
  similarPairs(['nba', 'cba', 'dba'])
)
