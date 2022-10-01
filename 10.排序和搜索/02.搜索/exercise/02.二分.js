const { quickSort } = require('../../01.排序/05.快速排序')

const binarySearch = (arr, value) => {
  const sortArr = quickSort(arr)
  let min = 0
  let max = sortArr.length - 1
  while (min <= max) {
    const middle = Math.floor((min + max) / 2)
    if (arr[middle] < value) {
      min = middle + 1
    } else if (arr[middle] > value) {
      max = middle - 1
    } else {
      return middle
    }
  }
  return -1
}

console.log(binarySearch([5, 6, 4, 8, 10, 11, 87], 10))
