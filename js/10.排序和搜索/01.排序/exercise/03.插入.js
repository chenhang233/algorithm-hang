const { exampleMatrixFn } = require('./00.testData')

const insertionSort = (arr = []) => {
  const { length } = arr
  if (!length) return []
  let temp
  for (let i = 1; i < length; i++) {
    let j = i
    temp = arr[i]
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  return arr
}

// exampleMatrixFn(insertionSort)
module.exports = {
  insertionSort,
}
