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
}
const list = new LinkedList()
list.push(15)
list.push(10)
list.push(100)
