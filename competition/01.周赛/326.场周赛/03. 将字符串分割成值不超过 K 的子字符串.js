/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function (s, k) {
  let f = true
  const findS = (i, s, k, arr) => {
    let sub = s[i]
    while (parseInt(sub) <= k) {
      if (s[i + 1] && parseInt(sub + s[i + 1]) <= k) {
        sub += s[++i]
      } else {
        i++
        break
      }
    }
    if (parseInt(sub) > k) {
      i = s.length
      f = false
    } else {
      arr.push(sub)
    }
    if (i < s.length) findS(i, s, k, arr)
  }
  const arr = []
  findS(0, s, k, arr)
  return f ? arr.length : -1
}

// minimumPartition('165462', 60)
// minimumPartition('238182', 5)
minimumPartition('1', 1)
