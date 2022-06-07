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
const swap = (array, a, b) => ([array[a], array[b]] = [array[b], array[a]])
// 选择排序同样也是一个复杂度为 O(n2)的算法
function selectionSort(array, compareFn = defaultCompare) {
  const { length } = array
  let indexMin // 表示最小值
  for (let i = 0; i < length - 1; i++) {
    indexMin = i
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin)
    }
  }
  return array
}

const r = selectionSort([5, 4, 3, 2, 1])
console.log(r)
