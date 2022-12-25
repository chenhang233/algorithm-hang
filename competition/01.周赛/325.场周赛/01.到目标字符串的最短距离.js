/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function (words, target, startIndex) {
  const n = words.length
  let min = -1
  let flag = true
  for (let i = 0; i < n; i++) {
    if (words[i] === target) {
      if (i < startIndex) {
        min = min === -1 ? startIndex - i : Math.min(min, startIndex - i)
      } else if (i > startIndex) {
        min = min === -1 ? i - startIndex : Math.min(min, i - startIndex)
      } else {
        min = 0
        flag = false
        break
      }
    }
  }
  if (flag) {
    for (let i = n - 1; i >= 0; i--) {
      if (words[i] === target) {
        console.log(n - i + startIndex, '-------', n - 1 - startIndex + i)
        const v = Math.min(n - i + startIndex, n - 1 - startIndex + i + 1)
        if (i !== startIndex) {
          min = min === -1 ? v : Math.min(min, v)
        } else {
          min = 0
          break
        }
      }
    }
  }
  console.log(min)
  return min
}

closetTarget(['hello', 'i', 'am', 'leetcode', 'hello'], 'hello', 1) // 1
closetTarget(['a', 'b', 'leetcode'], 'leetcode', 0) // 1
closetTarget(['i', 'eat', 'leetcode'], 'ate', 0) // -1
closetTarget(['a', 'b', 'leetcode'], 'leetcode', 0) // 1
closetTarget(
  [
    'hsdqinnoha',
    'mqhskgeqzr',
    'zemkwvqrww',
    'zemkwvqrww',
    'daljcrktje',
    'fghofclnwp',
    'djwdworyka',
    'cxfpybanhd',
    'fghofclnwp',
    'fghofclnwp',
  ],
  'zemkwvqrww',
  8
) // 4
