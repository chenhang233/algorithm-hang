const swap = (array, a, b) => ([array[a], array[b]] = [array[b], array[a]])
class MaxHeap {
  constructor() {
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
  insert(value) {
    if (value != null) {
      this.heap.push(value)
      this.siftUp(this.heap.length - 1)
      return true
    }
    return false
  }
  siftUp(index) {
    let parent = this.getParentIndex(index)
    while (index > 0 && this.heap[parent] < this.heap[index]) {
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
  findMaxmum() {
    return this.isEmpty() ? undefined : this.heap[0]
  }
  extract() {
    if (this.isEmpty()) {
      return undefined
    }
    if (this.size() === 1) {
      return this.heap.shift()
    }
    const removedValue = this.heap.shift()
    this.heap.unshift(this.heap.pop())
    this.siftDown(0)
    return removedValue
  }
  siftDown(index) {
    let element = index
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    const size = this.size()
    if (left < size && this.heap[element] < this.heap[left]) {
      element = left
    }
    if (right < size && this.heap[element] < this.heap[right]) {
      element = right
    }
    if (index !== element) {
      swap(this.heap, index, element)
      this.siftDown(element)
    }
  }
}

const heap = new MaxHeap()
for (let i = 1; i < 10; i++) {
  heap.insert(i)
}
console.log('Extract minimum: ', heap.extract()) // 1
console.log('Extract minimum: ', heap.extract())
console.log('Extract minimum: ', heap.extract())
console.log('Extract minimum: ', heap.extract())
console.log(heap.heap)
