const { exampleMatrixFn } = require('./00.testData')

const bubbleSort = (arr = []) => {
  const { length } = arr
  if (!length) return []
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  return arr
}

exampleMatrixFn(bubbleSort)
