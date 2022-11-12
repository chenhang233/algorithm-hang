/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const len = s.length
  const astr = s.slice(0, len / 2)
  const bstr = s.slice(len / 2, len)
  const map = new Map([
    ['a', 'a'],
    ['e', 'e'],
    ['i', 'i'],
    ['o', 'o'],
    ['u', 'u'],
    ['A', 'A'],
    ['E', 'E'],
    ['I', 'I'],
    ['O', 'O'],
    ['U', 'U'],
  ])
  let aLen = 0,
    bLen = 0
  for (let i = 0; i < astr.length; i++) {
    if (map.has(astr[i])) {
      aLen++
    }
    if (map.has(bstr[i])) {
      bLen++
    }
  }
  return aLen === bLen
}
