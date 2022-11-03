/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let word_ = word
  let count = 0
  while (sequence.includes(word_)) {
    count++
    word_ += word
  }
  return count
}
