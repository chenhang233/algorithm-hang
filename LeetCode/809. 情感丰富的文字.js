/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
  let count = 0
  const expend = (s, word) => {
    let current_s = s[0]
    let current_w = word[0]
    if (current_s !== current_w) return
    let s_i = 1
    let s_count = 0
    while (s[s_i] === current_s) {
      s_i++
      s_count++
    }
    let w_i = 1
    let w_count = 0
  }
  for (const word of words) {
    if (expend(s, word)) count++
  }
  return count
}

expressiveWords('abcd', ['abc'])
