const { exampleMatrixFn } = require('./00.testData')
const { insertionSort } = require('./03.插入')

const createBuckets = (arr, bucketSize) => {
  let minValue = arr[0]
  let maxValue = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i]
    } else if (arr[i] > maxValue) {
      maxValue = arr[i]
    }
  }
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  const buckets = []
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = []
  }
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize)
    buckets[bucketIndex].push(arr[i])
  }
  return buckets
}
const sortBuckets = (buckets) => {
  const sortedArray = []
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i]) {
      insertionSort(buckets[i])
      sortedArray.push(...buckets[i])
    }
  }
  return sortedArray
}

const bucketSort = (arr, bucketSize = 5) => {
  if (arr.length < 2) return arr
  const buckets = createBuckets(arr, bucketSize)
  return sortBuckets(buckets)
}

exampleMatrixFn(bucketSort)
