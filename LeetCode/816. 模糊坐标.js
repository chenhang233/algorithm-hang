/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (s) {
  const s1 = s.slice(1, s.length - 1)
  const n = s1.length
  const res = []
  const getAll = (str) => {
    const arr = []
    if (str[0] !== '0' || str.length === 1) {
      arr.push(str)
    }
    for (let k = 1; k < str.length; k++) {
      if ((k !== 1 && str[0] === '0') || str[str.length - 1] === '0') continue
      arr.push(str.slice(0, k) + '.' + str.slice(k))
    }
    return arr
  }
  for (let i = 1; i < n; i++) {
    const left = getAll(s1.slice(0, i))
    const right = getAll(s1.slice(i))
    for (let l of left) {
      for (let r of right) {
        res.push('(' + l + ', ' + r + ')')
      }
    }
  }
  return res
}
