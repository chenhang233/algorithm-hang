/**
 * 超时例子
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  const map = new Map()
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], [i])
    } else {
      map.set(s[i], [...map.get(s[i]), i])
    }
  }
  for (let key of words) {
    let tempKey = ''
    let f = true
    for (let i = 0; i < key.length; i++) {
      let char = key[i]
      if (!map.has(char)) {
        f = false
        break
      }
      tempKey += char
    }
    if (f) {
      const startArr = map.get(tempKey[0])
      let f3 = false
      for (let num of startArr) {
        let f2 = true
        for (let j = 0; j < tempKey.length; j++) {
          const every = map.get(tempKey[j])
          const nextF = every.some((v) => (v >= num ? (num = v + 1) : false))
          if (!nextF) f2 = false
        }
        if (f2) {
          f3 = true
          break
        }
      }
      if (f3) count++
    }
  }
  return count
}

numMatchingSubseq('abcde', ['a', 'bb', 'acd', 'ace'])

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq2 = function (s, words) {
  const codeArr = Array.from({ length: 26 }, () => [])
  const binarySearch = (list, target) => {
    let left = 0,
      right = list.length - 1
    while (left < right) {
      const middle = left + Math.floor((right - left) / 2)
      if (list[middle] > target) {
        right = middle
      } else {
        left = middle + 1
      }
    }
    return list[left]
  }
  for (let c = 0; c < s.length; c++) {
    codeArr[s[c].charCodeAt() - 'a'.charCodeAt()].push(c)
  }
  let n = words.length
  for (let item of words) {
    if (item.length > s.length) {
      n--
      continue
    }
    let position = -1
    for (let i = 0; i < item.length; i++) {
      let index = item[i].charCodeAt() - 'a'.charCodeAt()
      if (
        codeArr[index].length === 0 ||
        codeArr[index][codeArr[index].length - 1] <= position
      ) {
        n--
        break
      }
      position = binarySearch(codeArr[index], position)
    }
  }
  return n
}
