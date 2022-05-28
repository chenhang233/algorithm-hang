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
class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.heap = []
  }
  getLeftIndex(index) {
    return 2 * index + 1
  }
  getRightIndex(index) {
    return 2 * index + 2
  }
  getParentIndex(index) {
    if (index === 0) {
      return undefined
    }
    return Math.floor((index - 1) / 2)
  }
  // 向堆中插入新值
  insert(value) {
    if (value != null) {
      this.heap.push(value)
      this.siftUp(this.heap.length - 1)
      return true
    }
    return false
  }
  //   上移操作
  siftUp(index) {
    let parent = this.getParentIndex(index)
    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) > Compare.LESS_THAN) {
      swap(this.heap, parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }
  size() {
    return this.heap.length
  }
  isEmpty() {
    return this.size() === 0
  }
  // 从堆中找到最小值或最大值
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0]
  }
  //  导出堆中的最小值或最大值 删除
  extract() {
    if (this.isEmpty()) {
      return undefined
    }
    if (this.size() === 1) {
      return this.heap.shift()
    }
    const removedValue = this.heap.shift()
    this.siftDown(0)
    return removedValue
  }
  // 下移操作（堆化）
  siftDown(index) {
    let element = index
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    const size = this.size()
    if (left < size && this.compareFn(this.heap[element], this.heap[left]) < Compare.BIGGER_THAN) {
      element = left
    }
    if (right < size && this.compareFn(this.heap[element], this.heap[right]) < Compare.BIGGER_THAN) {
      element = right
    }
    if (index !== element) {
      swap(this.heap, index, element)
      this.siftDown(element)
    }
  }
}

heap = new MinHeap()
for (let i = 1; i < 10; i++) {
  heap.insert(i)
}
console.log('Extract minimum: ', heap.extract()) // 1
function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length
  buildMaxHeap(array, compareFn)
  while (heapSize > 1) {
    swap(array, 0, --heapSize)
    heapify(array, 0, heapSize, compareFn)
  }
  return array
}

function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn)
  }
  return array
}
