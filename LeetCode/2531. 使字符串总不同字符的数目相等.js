/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible = function (word1, word2) {
  const map1 = new Map(),
    map2 = new Map()
  for (let i = 0; i < word1.length; i++) {
    map1.set(word1[i], (map1.get(word1[i]) || 0) + 1)
  }
  for (let i = 0; i < word2.length; i++) {
    map2.set(word2[i], (map2.get(word2[i]) || 0) + 1)
  }
  for (let [m1] of map1) {
    for (let [m2] of map2) {
      if (m1 === m2) {
        if (map1.size === map2.size) return true
      } else {
        if (
          map1.size - (map1.get(m1) === 1) + !map1.has(m2) ===
          map2.size - (map2.get(m2) === 1) + !map2.has(m1)
        )
          return true
      }
    }
  }
  return false
}
