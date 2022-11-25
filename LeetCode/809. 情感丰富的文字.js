/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
  let count = 0
  const expend = (s, word) => {
    let i = 0,
      j = 0
    while (i < s.length && j < word.length) {
      if (s[i] !== word[j]) return
      const ss = s[i]
      let s_c = 0
      while (i < s.length && s[i] === ss) {
        s_c++
        i++
      }
      let w_c = 0
      while (j < word.length && word[j] === ss) {
        j++
        w_c++
      }
      if (w_c > s_c) return
      if (w_c !== s_c && s_c < 3) return
    }
    return s.length === i && word.length === j
  }
  for (const word of words) {
    if (expend(s, word)) count++
  }
  return count
}

expressiveWords('abcd', ['abc'])
