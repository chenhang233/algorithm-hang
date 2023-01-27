/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = []
  const backtrack = (index, path, j) => {
    if (index === 4) {
      if (!s[j] && j <= s.length) {
        res.push(path.join('.'))
      }
      return
    }
    for (let i = 0; i < 3; i++) {
      const nextsub = s.slice(j, j + i + 1)
      if (
        (nextsub[0] !== '0' || nextsub.length === 1) &&
        parseInt(nextsub) <= 255
      ) {
        path.push(nextsub)
        index++
        j = j + i + 1
        backtrack(index, path, j)
        index--
        path.pop()
        j = j - i - 1
      }
    }
  }
  backtrack(0, [], 0)
  console.log(res)
  return res
}

restoreIpAddresses('25525511135')
restoreIpAddresses('0000')
restoreIpAddresses('101023')

// ["255.255.11.135","255.255.111.35"]
