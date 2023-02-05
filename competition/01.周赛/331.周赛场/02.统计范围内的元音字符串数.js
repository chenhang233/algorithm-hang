/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  const sMap = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  }
  const map2 = {}
  const res = Array.from({ length: queries.length }, () => 0)
  for (let i = 0; i < words.length; i++) {
    const c1 = words[i].charAt(0)
    const c2 = words[i].charAt(words[i].length - 1)
    map2[i] = sMap[c1] && sMap[c2]
  }
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i]
    for (let j = query[0]; j <= query[1]; j++) {
      if (map2[j]) {
        res[i]++
      }
    }
  }
  return res
}

vowelStrings(
  ['aba', 'bcb', 'ece', 'aa', 'e'],
  [
    [0, 2],
    [1, 4],
    [1, 1],
  ]
)
