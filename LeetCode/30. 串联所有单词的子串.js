/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const arrangeArr = []
  let S1 = s.length,
    n = words[0].length,
    m = words.length
  for (let i = 0; i < n; i++) {
    if (i + m * n > S1) {
      break
    }
    const map = new Map()
    for (let j = 0; j < m; j++) {
      const word = s.substring(i + j * n, i + (j + 1) * n)
      map.set(word, (map.get(word) || 0) + 1)
    }
    for (let word of words) {
      map.set(word, (map.get(word) || 0) - 1)
      if (map.get(word) === 0) {
        map.delete(word)
      }
    }
    for (let start = i; start < S1 - m * n + 1; start += n) {
      if (start !== i) {
        let word = s.substring(start + (m - 1) * n, start + m * n)
        map.set(word, (map.get(word) || 0) + 1)
        if (map.get(word) === 0) {
          map.delete(word)
        }
        word = s.substring(start - n, start)
        map.set(word, (map.get(word) || 0) - 1)
        if (map.get(word) === 0) {
          map.delete(word)
        }
      }
      if (map.size === 0) {
        arrangeArr.push(start)
      }
    }
  }
  return arrangeArr
}
