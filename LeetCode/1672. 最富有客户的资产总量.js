/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  const sum = (arr, index) => {
    let s = 0
    while (arr[index]) {
      s += arr[index++]
    }
    return s
  }
  let maxArr = sum(accounts[0], 0)
  for (let i = 1; i < accounts.length; ++i) {
    let temp = sum(accounts[i], 0)
    if (temp > maxArr) maxArr = temp
  }
  return maxArr
}
