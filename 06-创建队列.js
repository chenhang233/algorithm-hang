class queue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  // 向队列添加元素
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }
  // 从队列移除元素
  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  // 查看队列头元素
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  // 检查队列是否为空
  isEmpty() {
    return this.size() === 0
  }
  // 返回队列尺寸
  size() {
    return this.count - this.lowestCount
  }
  // 清空队列
  clear() {
    while (!this.isEmpty()) {
      this.dequeue()
    }
    this.count = 0
    this.lowestCount = 0
  }
}

module.exports = queue
