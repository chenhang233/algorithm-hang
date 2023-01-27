/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const map = new Map()
  let L = 0,
    R = 0
  let res = ''
  for (let s of t) {
    let temp = map.get(s)
    map.set(s, temp ? temp + 1 : 1)
  }
  let mapLen = map.size
  while (R < s.length) {
    let c = s[R]
    if (map.has(c)) {
      map.set(c, map.get(c) - 1)
      if (map.get(c) === 0) mapLen--
    }
    while (mapLen === 0) {
      let str = s.substring(L, R + 1)
      if (!res || str.length < res.length) res = str
      let c_ = s[L]
      if (map.has(c_)) {
        map.set(c_, map.get(c_) + 1)
        if (map.get(c_) === 1) mapLen++
      }
      L++
    }
    R++
  }
  return res
}
