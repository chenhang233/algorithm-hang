const { Node, LinkedList } = require('./01.创建链表')

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn) {
    super(equalsFn)
    this.tail = undefined
  }
  // 重写insert 方法
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element)
      let current = this.head
      if (index === 0) {
        if (this.head == null) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          current.prev = node
          this.head = node
        }
      } else if (index === this.count) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
      }
      this.count++
      return true
    }
    return false
  }
  //  重写removeAt 方法 还需要设置前一个位置的指针
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      // 如果删除头
      if (index === 0) {
        this.head = current.next
        // 如果只有一项，更新 tail
        if (this.count === 1) {
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (index === this.count - 1) {
        //删除 最后一项
        current = this.tail
        this.tail = current.prev
        this.tail.next = undefined
      } else {
        current = this.getElementAt(index)
        const previous = current.prev
        // 将 previous 与 current 的下一项链接起来——跳过 current
        previous.next = current.next
        current.next.prev = previous
      }
      this.count--
      return current.element
    }
    return undefined
  }
}

const listDoubly = new DoublyLinkedList()
listDoubly.insert(1, 0)
listDoubly.insert(2, 1)
console.log(listDoubly.tail)
