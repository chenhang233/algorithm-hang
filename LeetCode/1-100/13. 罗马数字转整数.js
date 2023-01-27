/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = new Map()
  const hash = [
    { key: 'I', value: 1 },
    { key: 'V', value: 5 },
    { key: 'X', value: 10 },
    { key: 'L', value: 50 },
    { key: 'C', value: 100 },
    { key: 'D', value: 500 },
    { key: 'M', value: 1000 },
  ]
  hash.forEach((obj) => map.set(obj.key, obj.value))
  let res = 0
  // IX = 9 = -1 + 10
  for (let i = 0; i < s.length; ++i) {
    const value = map.get(s[i])
    if (i < s.length - 1 && value && value < map.get(s[i + 1])) {
      res -= value
    } else {
      res += value
    }
  }
  return res
}
