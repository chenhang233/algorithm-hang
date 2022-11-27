/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * 超时
 */
var appendCharacters = function (s, t) {
  const t0 = t[0]
  const sArr = []
  let maxPrev = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t0) sArr.push(i)
  }
  for (const index of sArr) {
    let ti = 0
    for (let i = index; i < s.length; i++) {
      if (s[i] === t[ti]) ti++
    }
    if (ti > maxPrev) maxPrev = ti
  }
  return t.length - maxPrev
}

var appendCharacters2 = function (s, t) {
  let ti = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[ti]) {
      ti++
    }
  }
  return t.length - ti
}

console.log(appendCharacters2('coacching', 'coding'))
console.log(appendCharacters2('abcde', 'a'))
console.log(appendCharacters2('z', 'abcde'))
