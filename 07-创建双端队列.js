class Deque {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  // 该方法在双端队列前端添加新的元素
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.items[0] = element
      this.lowestCount = 0
      this.count++
    }
  }
  // 该方法在双端队列后端添加新的元素
  addBack(element) {
    this.items[this.count] = element
    this.count++
  }
  // 该方法会从双端队列前端移除第一个元素
  removeFront() {
    if (this.isEmpty()) {
      return undefined
    }
    const first = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return first
  }
  // 该方法会从双端队列后端移除第一个元素
  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const last = this.items[this.count]
    delete this.items[this.count]
    return last
  }
  // 该方法返回双端队列前端的第一个元素
  peekFront() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  // 该方法返回双端队列后端的第一个元素
  peekBack() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }
  // 检查队列是否为空
  isEmpty() {
    return this.size() === 0
  }
  // 返回队列尺寸
  size() {
    return this.count - this.lowestCount
  }
}

module.exports = Deque
