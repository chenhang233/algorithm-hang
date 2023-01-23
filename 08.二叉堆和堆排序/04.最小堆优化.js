class MinHeap {
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
    while (index > 0 && this.heap[p] > v) {
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
    const leftVal = (i) => this.heap[this.getLeftIndex(i)] || val
    const rightVal = (i) => this.heap[this.getRightIndex(i)] || val
    while (
      (leftVal(i) || rightVal(i)) &&
      val > Math.min(leftVal(i), rightVal(i))
    ) {
      const next =
        leftVal(i) < rightVal(i) ? this.getLeftIndex(i) : this.getRightIndex(i)
      this.swap(this.heap, i, next)
      i = next
    }
  }
}
const heap = new MinHeap()
;[1, 5, 50, 10, 10].forEach((v) => heap.insert(v))
console.log(heap.extract())
console.log(heap.extract())
console.log(heap.extract())
console.log(heap.extract())
