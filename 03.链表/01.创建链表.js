function defaultEquals(a, b) {
  return a === b
}

class Node {
  constructor(element) {
    this.element = element // 表示要加入链表元素的值
    this.next = undefined // 指向链表中下一个元素的指针
  }
}
class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0 // 存储链表中的元素数量
    this.head = undefined // 要将第一个元素的引用保存下来。保存引用
    this.equalsFn = equalsFn
  }
  //   向链表尾部添加元素
  push(element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }
  //循环迭代链表直到目标位置
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
  }
  // 从链表中移除元素 下标
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        let previous = this.getElementAt(index - 1)
        current = previous.next
        //将 previous 与 current 的下一项链接起来：跳过 current，从而移除它
        previous.next = current.next
      }
      this.count--
      return current.element
    }
  }
  // 在任意位置插入元素
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current
        current.next = node
      }
      this.count++
      return true
    }
    return false
  }
  // 返回一个元素的位置
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }
  //  从链表中移除元素 值
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }
  // 返回链表元素个数
  size() {
    return this.count
  }
  // 是否为空
  isEmpty() {
    return this.size() === 0
  }
  // 获取私有变量
  getHead() {
    return this.head
  }
  // 输出
  toString() {
    if (this.isEmpty()) {
      return '空'
    }
    let obj = `${this.head.element}`
    let current = this.head.next
    for (let i = 0; i < this.size() && current != null; i++) {
      obj = `${obj}, ${current.element}`
      current = current.next
    }
    return obj
  }
}
const list = new LinkedList()
list.push(15)
list.push(10)
list.push(100)
console.log(list.toString())

module.exports = {
  Node,
  LinkedList,
}
