const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
}
function defaultCompare(a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
function quick(array, left, right, compareFn) {
  let index
  if (array.length > 1) {
    index = partition(array, left, right, compareFn)
    if (left < index - 1) {
      // {4}
      quick(array, left, index - 1, compareFn) // {5}
    }
    if (index < right) {
      // {6}
      quick(array, index, right, compareFn) // {7}
    }
  }
  return array
}
function partition(array, left, right, compareFn) {
  const pivot = array[Math.floor((right + left) / 2)] // {8}
  let i = left // {9}
  let j = right // {10}
  while (i <= j) {
    // {11}
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      // {12}
      i++
    }
    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      // {13}
      j--
    }
    if (i <= j) {
      // {14}
      swap(array, i, j) // {15}
    }
  }
}
function quickSort(array, compareFn = defaultCompare) {
  return quick(array, 0, array.length - 1, compareFn)
}
