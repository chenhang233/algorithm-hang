/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible = function (word1, word2) {
  const map1 = {}
  const map1Max = new Set()
  let m1 = 0
  const map2 = {}
  const map2Max = new Set()
  let m2 = 0
  for (let i = 0; i < word1.length; i++) {
    let c = word1[i]
    if (map1[c]) {
      map1[c]++
      map1Max.add(c)
    } else {
      map1[c] = 1
      m1++
    }
  }
  for (let i = 0; i < word2.length; i++) {
    let c = word2[i]
    if (map2[c]) {
      map2[c]++
      map2Max.add(c)
    } else {
      map2[c] = 1
      m2++
    }
  }
  const abs = Math.abs(m1 - m2)
  //   console.log(abs, map1Max.size, map2Max.size)
  if (abs > 1) {
    return false
  } else if (abs === 0 && map1Max.size === 0 && map2Max.size === 0) {
    return true
  } else {
    // console.log(map1Max.size, map2Max.size)
    let f = false
    let f2 = true
    Object.keys(map1).forEach((v) => {
      if (map2[v]) {
        if (f) {
          f2 = false
        }
        f = true
      }
    })
    if (abs === 1 && f && f2) {
      return true
    }
    return map1Max.size === 1 && map2Max.size === 1
  }
}

console.log(isItPossible('abcc', 'aab')) // t
console.log(isItPossible('ac', 'b')) // f
console.log(isItPossible('abcde', 'fghij')) // t
console.log(isItPossible('a', 'bb')) // f
console.log(isItPossible('aa', 'bbcc')) // f
console.log(isItPossible('az', 'a')) // t
console.log(isItPossible('ab', 'abcc')) // f
