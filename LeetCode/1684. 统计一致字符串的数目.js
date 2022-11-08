/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let count = 0
  const n = words.length
  for (let i = 0; i < n; i++) {
    const wordArr = words[i].split('')
    let flag = true
    for (let j = 0; j < wordArr.length; j++) {
      if (!allowed.includes(wordArr[j])) flag = false
    }
    if (flag) count++
  }
  return count
}
