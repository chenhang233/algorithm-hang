const str = 'aabbababc'

function getMaxCount(str) {
  const obj = {}
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (!obj[char]) {
      obj[char] = 1
    } else {
      obj[char]++
    }
  }
  let maxCount = 0
  let maxChart = ''
  for (let i in obj) {
    if (obj[i] > maxCount) {
      maxCount = obj[i]
      maxChart = i
    }
  }
  return { maxChart, maxCount }
}

console.log(getMaxCount(str))
