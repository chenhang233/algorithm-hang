/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 * 超时
 */
var maxScore2 = function (nums1, nums2, k) {
  let res = 0
  const findAll = (cur, i) => {
    if (cur.length === k) {
      let min = nums2[cur[0]]
      let score = nums1[cur[0]]
      for (let index = 1; index < cur.length; index++) {
        if (nums2[cur[index]] < min) min = nums2[cur[index]]
        score += nums1[cur[index]]
      }
      const t = min * score
      if (t > res) res = t
      return
    }
    for (let j = i; j < nums1.length; j++) {
      cur.push(j)
      j++
      findAll(cur, j)
      j--
      cur.pop()
    }
  }
  findAll([], 0)
  return res
}

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

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
  let maxScore = 0,
    n = nums1.length
  const matrix = Array.from({ length: n }, (_, i) => [nums1[i], nums2[i]])
  matrix.sort((a, b) => b[1] - a[1])
  const minHeap = new MinHeap() // 记录用到的每一个数字
  let sum = 0
  for (let i = 0; i < n; i++) {
    if (i >= k) {
      sum -= minHeap.extract()
    }
    let cur = matrix[i]
    sum += cur[0]
    minHeap.insert(cur[0])
    if (i >= k - 1) {
      maxScore = Math.max(sum * cur[1], maxScore)
    }
  }
  return maxScore
}
console.log(maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3))
console.log(maxScore([4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1))
