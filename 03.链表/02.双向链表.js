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
}
