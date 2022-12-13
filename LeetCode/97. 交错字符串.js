/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const t1 = s1 + s2
  const map = {}
  for (let i = 0; i < t1.length; i++) {
    map[t1[i]] = (map[t1[i]] || 0) + 1
  }
  console.log(map)
  for (let j = 0; j < s3.length; j++) {
    console.log(s3[j], 's3[j]')
    if (map[s3[j]]) {
      map[s3[j]]--
    } else {
      return false
    }
  }
  return true
}

isInterleave('aabcc', 'dbbca', 'aadbbbaccc')
