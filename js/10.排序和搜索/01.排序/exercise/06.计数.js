const { exampleMatrixFn } = require('./00.testData')

const countingSort = (arr) => {
  if (arr.length < 2) return arr
  let maxValue = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) maxValue = arr[i]
  }
  const count = new Array(maxValue + 1)
  arr.forEach((v) => {
    if (!count[v]) count[v] = 0
    count[v]++
  })
  let index = 0
  count.forEach((v, i) => {
    while (v > 0) {
      arr[index++] = i
      v--
    }
  })
  return arr
}

exampleMatrixFn(countingSort)
