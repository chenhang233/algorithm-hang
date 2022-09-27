const { exampleMatrixFn } = require('./00.testData')

const mergeSort = (arr = []) => {
  const { length } = arr
  if (!length) return []
  if (arr.length > 1) {
    const middle = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, middle))
    const right = mergeSort(arr.slice(middle, length))
    let i = 0
    let j = 0
    let result = []
    while (i < left.length && j < right.length) {
      result.push(left[i] > right[j] ? right[j++] : left[i++])
    }
    result = result.concat(
      i < left.length ? left.slice(i, length) : right.slice(j, length)
    )
    arr = result
  }
  return arr
}

exampleMatrixFn(mergeSort)
