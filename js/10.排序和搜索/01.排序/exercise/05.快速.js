const { exampleMatrixFn } = require('./00.testData')

const quickSort = (arr = []) => {
  const { length } = arr
  if (!length) return []
  return quick(arr, 0, arr.length - 1)
}
const partition = (arr, left, right) => {
  const piovt = arr[Math.floor((left + right) / 2)]
  let i = left
  let j = right
  while (i <= j) {
    while (arr[i] < piovt) {
      i++
    }
    while (arr[j] > piovt) {
      j--
    }
    if (i <= j) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
  }
  return i
}
const quick = (arr, left, right) => {
  let index
  if (arr.length > 1) {
    index = partition(arr, left, right)
    if (index - 1 > left) {
      quick(arr, left, index - 1)
    }
    if (index < right) {
      quick(arr, index, right)
    }
  }
  return arr
}

exampleMatrixFn(quickSort)
