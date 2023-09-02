class MaxHeap {
  constructor() {
    this.heap = []
  }
  swap = (array, a, b) => ([array[a], array[b]] = [array[b], array[a]])
  getLeftIndex(index) {
    return 2 * index + 1
  }
  getRightIndex(index) {
    return 2 * index + 2
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }
  insert(value) {
    this.heap.push(value)
    this.siftUp(this.size() - 1)
    return true
  }
  siftUp(index) {
    const v = this.heap[index]
    let p = this.getParentIndex(index)
    while (index > 0 && this.heap[p] < v) {
      this.swap(this.heap, p, index)
      index = p
      p = this.getParentIndex(index)
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
    this.swap(this.heap, 0, this.size() - 1)
    const remove = this.heap.pop()
    this.sink(0)
    return remove
  }
  sink(i) {
    const val = this.heap[i]
    const leftVal = (i) => this.heap[this.getLeftIndex(i)] || 0
    const rightVal = (i) => this.heap[this.getRightIndex(i)] || 0
    while (
      (leftVal(i) || rightVal(i)) &&
      val < Math.max(leftVal(i), rightVal(i))
    ) {
      const next =
        leftVal(i) > rightVal(i) ? this.getLeftIndex(i) : this.getRightIndex(i)
      this.swap(this.heap, i, next)
      i = next
    }
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
      this.swap(this.heap, index, element)
      this.siftDown(element)
    }
  }
}

var maxKelements = function (nums, k) {
  let result = 0
  const heap = new MaxHeap()
  nums.forEach((v) => heap.insert(v))
  for (let i = 0; i < k; i++) {
    const cur = heap.extract()
    result += cur
    heap.insert(Math.ceil(cur / 3))
  }
  console.log(result)
  return result
}

maxKelements([10, 10, 10, 10, 10], 5)
