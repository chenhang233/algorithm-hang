const { quickSort } = require('../01.排序/05.快速排序')
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
}
function defaultCompare(a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
function lesserOrEquals(a, b, compareFn) {
  const comp = compareFn(a, b)
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS
}
function binarySearch(array, value, compareFn = defaultCompare) {
  const sortedArray = quickSort(array)
  let low = 0
  let high = sortedArray.length - 1
  while (lesserOrEquals(low, high, compareFn)) {
    const mid = Math.floor((low + high) / 2)
    const element = sortedArray[mid]
    if (compareFn(element, value) === Compare.LESS_THAN) {
      low = mid + 1
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}
