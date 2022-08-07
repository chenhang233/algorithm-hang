/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let flag = true
  for (let i = 0; i < ransomNote.length; ++i) {
    let j = 0
    let prevLen = magazine.length
    while (j < magazine.length) {
      if (ransomNote[i] === magazine[j]) {
        magazine = magazine.slice(0, j) + magazine.slice(j + 1)
        j++
        break
      }
      j++
    }
    if (prevLen === magazine.length) {
      flag = false
      break
    }
  }
  return flag
}
canConstruct('fffbfg', 'effjfggbffjdgbjjhhdegh')

var canConstruct2 = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false
  }
  const cnt = new Array(26).fill(0)
  for (const c of magazine) {
    cnt[c.charCodeAt() - 'a'.charCodeAt()]++
  }
  for (const c of ransomNote) {
    cnt[c.charCodeAt() - 'a'.charCodeAt()]--
    if (cnt[c.charCodeAt() - 'a'.charCodeAt()] < 0) {
      return false
    }
  }
  return true
}
canConstruct2('fffbfg', 'effjfggbffjdgbjjhhdegh')
