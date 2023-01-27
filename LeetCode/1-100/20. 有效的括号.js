/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false
  const map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ])
  let temp = []
  for (let k of s) {
    if (map.has(k)) {
      if (!temp.length || temp[temp.length - 1] !== map.get(k)) {
        return false
      }
      temp.pop()
    } else {
      temp.push(k)
    }
  }
  return !temp.length
}
