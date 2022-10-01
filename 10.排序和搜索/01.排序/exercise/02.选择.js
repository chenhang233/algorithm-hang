const { exampleMatrixFn } = require('./00.testData')

const selectionSort = (arr = []) => {
  const { length } = arr
  if (!length) return []
  let currentMini
  for (let i = 0; i < length; i++) {
    currentMini = i
    for (let j = i + 1; j < length; j++) {
      if (arr[currentMini] > arr[j]) currentMini = j
    }
    if (i !== currentMini)
      [arr[currentMini], arr[i]] = [arr[i], arr[currentMini]]
  }
  return arr
}

exampleMatrixFn(selectionSort)
