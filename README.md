### js算法

##### 01.栈(stack)

###### 0.LIFO(last-in，first-out)

```
后进先出法
指假定后入库的存货先发出，据此计算发出存货成本的方法。采用后进先出法时，每批发出存货的成本，按存货中最后入库的那批单价计算，如果发出存货的一批数量超过最后入库的那一批数量，超过部分依次按上一批入库的单价计算。
```

###### 1.是什么?

```
又名堆栈，它是一种运算受限的线性表。栈和队列类似于数组的数据结构
```

###### 2.为什么需要?

```
1.在添加和删除元素时更为可控
2.用在编程语言的编译器和内存中保存变量、方法调用等...
3.用于浏览器历史记录（浏览器的返回按钮原理）。
```

###### 3.创建一个基于数组的栈

```
class Stack {
  constructor() {
    this.items = []
  }
  // 向栈添加元素
  push(element) {
    this.items.push(element)
  }

  // 从栈移除元素
  pop() {
    return this.items.pop()
  }

  // 查看栈顶元素
  peek() {
    return this.items[this.items.length - 1]
  }
  // 检查栈是否为空
  isEmpty() {
    return this.items.length === 0
  }
  //返回栈的长度
  size() {
    return this.items.length
  }
  // 清空栈元素
  clear() {
    this.items = []
  }
}
```

###### 4.创建一个基于对象的栈

用对象的原因:

```
	创建一个 Stack 类最简单的方式是使用一个数组来存储其元素。在处理大量数据的时候，我们同样需要评估如何操作数据是最高效的。
	
	在使用数组时，大部分方法的时间复杂度是 O(n)。O(n)的意 思是，我们需要迭代整个数组直到找到要找的那个元素，在最坏的情况下需要迭代数组的所有位置，其中的 n 代表数组的长度。如果数组有更多元素的话，所需的时间会更长。另外，数组是元素的一个有序集合，为了保证元素排列有序，它会占用更多的内存空间。
	
	如果我们能直接获取元素，占用较少的内存空间，并且仍然保证所有元素按照我们的需要排列，那不是更好吗？对于使用 JavaScript 语言实现栈数据结构的场景，我们也可以使用一个 JavaScript 对象来存储所有的栈元素，保证它们的顺序并且遵循 LIFO 原则。
```

代码:

```
class Stack {
  constructor() {
    this.items = {}
    this.count = 0
  }
  push(element) {
    this.items[this.count] = element
    this.count++
  }
  size() {
    return this.count
  }
  isEmpty() {
    return this.count === 0
  }
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }
  clear() {
    while (!this.isEmpty()) {
      this.pop()
    }
  }
}
```

记录:

```
我们创建的方法的复杂度均为 O(1)，代表我们可以直接找到目标元素并对其进行操作（push、pop 或 peek）。
```

###### 5.用栈解决问题

前言:

```
在回溯问题中，它可以存储访问过的任务或路径、撤销的操作）。Java 和 C#用栈来存储变量和方
法调用，特别是处理递归算法时，有可能抛出一个栈溢出异常。
```

从十进制到二进制:

```
function decimalToBinary(number, base) {
  let rem
  let binaryString = ''
  let num = number
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let stack = new Stack()
  if (!(base >= 2 && base <= 36)) {
    return ''
  }
  while (num > 0) {
    rem = Math.floor(num % base)
    stack.push(rem)
    num = Math.floor(num / base)
  }
  while (!stack.isEmpty()) {
    binaryString += digits[stack.pop()]
  }
  return binaryString
}

console.log(decimalToBinary(100345, 16))
console.log(decimalToBinary(100345, 10))
```



##### 02.队列和双端队列

###### 0.FIFO( First Input First Output)

```
先进先出法
在系统设计中，以增加数据传输率、处理大量数据流、匹配具有不同传输率的系统为目的而广泛使用FIFO存储器，从而提高了系统性能。FIFO存储器是一个先入先出的双口缓冲器，即第一个进入其内的数据第一个被移出，其中一个是存储器的输入口，另一个口是存储器的输出口。
```

###### 1.队列是什么?双端队列是什么?

```
	队列是遵循先进先出（FIFO，也称为先来先服务）原则的一组有序的项。队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。
	双端队列（deque，或称 double-ended queue）是一种允许我们同时从前端和后端添加和移除元素的特殊队列。
```

###### 2.为什么需要队列?为什么需要双端队列?

```
	在计算机科学中，一个常见的例子就是打印队列。比如说我们需要打印五份文档。我们会打开每个文档，然后点击打印按钮。每个文档都会被发送至打印队列。第一个发送到打印队列的文档会首先被打印，以此类推，直到打印完所有文档。
	在计算机科学中，双端队列的一个常见应用是存储一系列的撤销操作。每当用户在软件中进行了一个操作，该操作会被存在一个双端队列中（就像在一个栈里）。当用户点击撤销按钮时，该操作会被从双端队列中弹出，表示它被从后面移除了。在进行了预先定义的一定数量的操作后，最先进行的操作会被从双端队列的前端移除。由于双端队列同时遵守了先进先出和后进先出原则，可以说它是把队列和栈相结合的一种数据结构。
```

###### 03.创建队列

```
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

```

###### 04.创建双端队列

```
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

```

###### 05.使用队列和双端队列来解决问题

1.击鼓传花的游戏---循环队列

```
const Queue = require('./06-创建队列')
// elementsList 参加的人 num 传递的频率
function hotPotato(elementsList, num) {
  const eliminatedList = [] // 被淘汰的人
  const queue = new Queue() // 队列
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i])
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminatedList.push(queue.dequeue())
  }
  return {
    淘汰的人们: elementsList,
    获胜者: queue.dequeue(),
  }
}

const names = ['小明', '小花', '小白', '小安', '小黄']
const math = Math.max(1, Math.floor(Math.random() * 10))
const result = hotPotato(names, math)
console.log(result)

```

2.回文检测器---双端队列

```
const Deque = require('./07-创建双端队列')

function palindromeChecker(str) {
  if (str === undefined || str === null || (str !== null && str.length === 0)) {
    return false
  }
  let isEqual = true
  let firstChar, lastChar
  const deque = new Deque()
  const lowerString = str.toLocaleLowerCase().split(' ').join('')
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString[i])
  }
  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront()
    lastChar = deque.removeBack()
    if (firstChar !== lastChar) {
      isEqual = false
    }
  }
  return isEqual
}

console.log('level', palindromeChecker('level'))
console.log('level1', palindromeChecker('level1'))

```



##### 03.链表

###### 1.是什么?

```
链表是存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成
```

###### 2.为什么需要?

```
数组有一个缺点:
数组的大小是固定的，从数组的起点或中间插入或移除项的成本很高，因为需要移动元素。
链表的一个好处:
添加或移除元素的时候不需要移动其他元素。。然而，链表需要使用指针，因此实现链表时需要额外注意。
```

###### 3.创建链表

```
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
        node.next = this.head
        this.head = current
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

```

###### 4.创建双向链表

双向链表的优势:

在单向链表中，如果迭代时错过了要找的元素，就需要回到起点，重新开始迭代。这是双向 链表的一个优势。

```

```









##### 04.集合

```

```

##### 05.字典和散列表

```

```

##### 06.递归

```

```

##### 07.树

```

```

##### 08.二叉树和堆排序

```

```

##### 09.图

```

```

##### 10.排序和搜索算法

```

```

##### 11.算法设计与技巧

```

```

##### 12.算法复杂度

```

```

##### 13.最后的话

```

```

