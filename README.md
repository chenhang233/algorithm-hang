### js算法

### 01.栈(stack)

###### 0.LIFO(last-in，first-out)

```
后进先出法
指假定后入库的存货先发出，据此计算发出存货成本的方法。采用后进先出法时，每批发出存货的成本，按存货中最后入库的那批单价计算，如果发出存货的一批数量超过最后入库的那一批数量，超过部分依次按上一批入库的单价计算。
```

###### 1.概念

```
又名堆栈，它是一种运算受限的线性表。栈和队列类似于数组的数据结构
```

###### 2.意义

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



### 02.队列和双端队列

###### 0.FIFO( First Input First Output)

```
先进先出法
在系统设计中，以增加数据传输率、处理大量数据流、匹配具有不同传输率的系统为目的而广泛使用FIFO存储器，从而提高了系统性能。FIFO存储器是一个先入先出的双口缓冲器，即第一个进入其内的数据第一个被移出，其中一个是存储器的输入口，另一个口是存储器的输出口。
```

###### 1.概念

```
	队列是遵循先进先出（FIFO，也称为先来先服务）原则的一组有序的项。队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。
	双端队列（deque，或称 double-ended queue）是一种允许我们同时从前端和后端添加和移除元素的特殊队列。
```

###### 2.意义

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



### 03.链表

###### 1.概念

```
链表是存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成
```

###### 2.意义

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

###### 4.双向链表

双向链表的优势:

在单向链表中，如果迭代时错过了要找的元素，就需要回到起点，重新开始迭代。这是双向 链表的一个优势。

tip:

我们可以对 insert 和 remove 这两个方法的实现做一些改进。在结果为否的情 况下，可以把元素插入双向链表的尾部。性能也可以有所改进，比如，如果 position 大于 length/2，就最好从尾部开始迭代，而不是从头开始（这样就 能迭代双向链表中更少的元素）。

```
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

```

###### 5.循环链表

循环链表可以像链表一样只有单向引用，也可以像双向链表一样有双向引用。循环链表和链 表之间唯一的区别在于，最后一个元素指向下一个元素的指针（tail.next）不是引用 undefined，而是指向第一个元素（head）

```
const { Node, LinkedList } = require('./01.创建链表')
class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }
  //向循环链表中插入元素的逻辑和向普通链表中插入元素的逻辑是一样的。不同之处在于我们
  // 需要将循环链表尾部节点的 next 引用指向头部节点。
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      let current = this.head
      if (index === 0) {
        if (this.head == null) {
          this.head = node
          node.next = this.head
        } else {
          node.next = current
          current = this.getElementAt(this.size())
          // 更新最后一个元素
          this.head = node
          current.next = this.head
        }
      } else {
        // 这种场景没有变化
        const previous = this.getElementAt(index - 1)
        node.next = previous.next
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }
  //   要从循环链表中移除元素，我们只需要考虑第二种情况，也就是修改循环链表的 head 元素。
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined
        } else {
          const removed = this.head
          current = this.getElementAt(this.size())
          this.head = this.head.next
          current.next = this.head
          current = removed // 返回删除项
        }
      } else {
        // 不需要修改循环链表最后一个元素
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
}

```

###### 6.有序链表

有序链表是指保持元素有序的链表结构。除了使用排序算法之外，我们还可以将元素插入到 正确的位置来保证链表的有序性。

```
const { Node, LinkedList } = require('./01.创建链表')

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
}
function defaultCompare(a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn)
    this.compareFn = compareFn
  }
  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0)
    }
    const pos = this.getIndexNextSortedElement(element)
    return super.insert(element, pos)
  }
  getIndexNextSortedElement(element) {
    let current = this.head
    let i = 0
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element)
      if (comp === Compare.LESS_THAN) {
        return i
      }
      current = current.next
    }
    return i
  }
}

```



### 04.集合

###### 1.概念

```JSX
	集合是由一组无序且唯一（即不能重复）的项组成的。该数据结构使用了与有限集合相同的数学概念，但应用在计算机科学的数据结构中。在数学中，集合是一组不同对象的集。比如说，一个由大于或等于 0 的整数组成的自然数集合：N = {0, 1, 2, 3, 4, 5, 6, …}。集合中
的对象列表用花括号（{}）包围。
	还有一个概念叫空集。空集就是不包含任何元素的集合。比如 24 和 29 之间的素数集合，由于 24 和 29 之间没有素数（除了 1 和自身，没有其他正因数的、大于 1 的自然数），这个集合就是空集。空集用{ }表示。
	结论:  集合是一个既没有重复元素，也没有顺序概念的数组。
```

###### 2.意义

```
集合运算:
	集合是数学中基础的概念，在计算机领域也非常重要。它在计算机科学中的主要应用之一是数据库，而数据库是大多数应用程序的根基。集合被用于查询的设计和处理。当我们创建一条从关系型数据库（Oracle、Microsoft SQL Server、MySQL 等）中获取一个数据集合的查询语句时，
使用的就是集合运算，并且数据库也会返回一个数据集合。当我们创建一条 SQL 查询命令时，可以指定是从表中获取全部数据还是获取其中的子集；也可以获取两张表共有的数据、只存在于一张表中的数据（不存在于另一张表中），或是存在于两张表内的数据（通过其他运算）。这些
SQL 领域的运算叫作联接，而 SQL 联接的基础就是集合运算。

	 并集：对于给定的两个集合，返回一个包含两个集合中所有元素的新集合。
	 交集：对于给定的两个集合，返回一个包含两个集合中共有元素的新集合。
	 差集：对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合。
	 子集：验证一个给定集合是否是另一集合的子集。集合 A 是集合 B 的子集（或集合 B 包含集合 A）
```

###### 3.创建集合类

```
class Set {
  constructor() {
    this.items = {}
  }
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }
  clear() {
    this.items = {}
  }
  size() {
    return Object.keys(this.items).length
  }
  sizeLegacy() {
    let count = 0
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++
      }
      return count
    }
  }
  values() {
    return Object.values(this.items)
  }
  valuesLegacy() {
    let values = []
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key)
      }
    }
    return values
  }
  // 并集
  union(otherSet) {
    const unionSet = new Set()
    this.values().forEach((value) => unionSet.add(value))
    otherSet.values().forEach((value) => unionSet.add(value))
    return unionSet
  }
  // 交集
  intersection(otherSet) {
    const intersectionSet = new Set()
    const values = this.values()
    const otherValues = otherSet.values()
    let biggerSet = values
    let smallerSet = otherValues
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues
      smallerSet = values
    }
    smallerSet.forEach((value) => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value)
      }
    })
    return intersectionSet
  }
  // 差集 所有存在于集合 A 但不存在于集合 B 的元素
  difference(otherSet) {
    const differenceSet = new Set()
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })
    return differenceSet
  }
  // 子集
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    let isSubset = true
    this.values().every((value) => {
      if (!otherSet.has(value)) {
        // {4}
        isSubset = false // {5}
        return false
      }
      return true // {6}
    })
    return isSubset // {7}
  }
}

const set = new Set()
set.add(1)
console.log(set.values())

```

######  4.使用扩展运算符

​	种计算并集、交集和差集的简便方法，就是使用扩展运算符，它包含在 ES2015 中

​	整个过程包含三个步骤： (1) 将集合转化为数组； (2) 执行需要的运算； (3) 将结果转化回集合。

```jsx
并集
console.log(new Set([...setA, ...setB])); 

ES2015 的 Set 类支持向构造函数传入一个数组来初始化集合的运算，那么我们对 setA 使
用扩展运算符（...setA）会将它的值转化为一个数组（展开它的值），然后对 setB 也这样做。
由于 setA 的值为[1, 2, 3]，setB 的值为[2, 3, 4]，上述代码和 new Set([1, 2, 3,
2, 3, 4])是一样的，但集合中每种值只会有一个。

交集
console.log(new Set([...setA].filter(x => setB.has(x))));

上面的代码同样将 setA 转化为了一个数组，并使用了 filter 方法，它会返回一个新数组，
包含能通过回调函数检测的值——在本示例中验证了元素是否也存在于 setB 中。返回的数组会
用来初始化结果集合。

差集
console.log(new Set([...setA].filter(x => !setB.has(x))));

代码和求交集的运算很相似，不同之处在于我们需要的是不存在于 setB 中的元素。

```

######  5.多重集或袋

```
	集合数据结构不允许存在重复的元素。但是，在数学中，有一个叫作多重集的概念，它允许我们向集合中插入之前已经添加过的元素。多重集（或袋）在计算集合中元素的出现次数时很有用。它也在数据库系统中得到了广泛运用。
```



### 05.字典和散列表

###### 1.概念

```
	集合表示一组互不相同的元素（不重复的元素）。在字典中，存储的是[键，值]对，其中键名是用来查询特定元素的。字典和集合很相似，集合以[值，值]的形式存储元素，字典则是以[键，值]的形式来存储元素。字典也称作映射、符号表或关联数组。
```

###### 2.意义

```
	在计算机科学中，字典经常用来保存对象的引用地址。例如，打开 Chrome | 开发者工具中的 Memory 标签页，执行快照功能，我们就能看到内存中的一些对象和它们对应的地址引用（用@<数>表示）。
```

###### 3.创建字典类

```
function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}

class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  toString() {
    return `[#${this.key}: ${this.value}]`
  }
}

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null
  }
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }
  get(key) {
    const valuePair = this.table[this.toStrFn(key)]
    return valuePair == null ? undefined : valuePair.value
  }
  keyValues() {
    return Object.values(this.table)
  }
  keys() {
    return this.keyValues().map((valuePair) => valuePair.key)
  }
  values() {
    return this.keyValues().map((valuePair) => valuePair.value)
  }
  forEach(callbackFn) {
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
      if (result === false) {
        break
      }
    }
  }
  size() {
    return Object.keys(this.table).length
  }
  isEmpty() {
    return this.size() === 0
  }
  clear() {
    this.table = {}
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const valuePairs = this.keyValues()
    let objString = `${valuePairs[0].toString()}`
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`
    }
    return objString
  }
}

const dictionary = new Dictionary()
dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'johnsnow@email.com')
dictionary.set('Tyrion', 'tyrion@email.com')
dictionary.remove('John')
dictionary.forEach((k, v) => {
  console.log('forEach: ', `key: ${k}, value: ${v}`)
})

```

###### 4.散列表

概念:

```
	HashTable 类，也叫 HashMap 类，它是 Dictionary 类的一种散列表实现方式
	散列算法的作用是尽可能快地在数据结构中找到一个值。在之前的章节中，你已经知道如果要在数据结构中获得一个值（使用 get 方法），需要迭代整个数据结构来找到它。如果使用散列函数，就知道值的具体位置，因此能够快速检索到该值。散列函数的作用是给定一个键值，然后
返回值在表中的地址。

```

意义:

```
	散列表有一些在计算机科学中应用的例子。因为它是字典的一种实现，所以可以用作关联数组。它也可以用来对数据库进行索引。当我们在关系型数据库（如 MySQL、Microsoft SQL Server、Oracle，等等）中创建一个新的表时，一个不错的做法是同时创建一个索引来更快地查询到记录的 key。在这种情况下，散列表可以用来保存键和对表中记录的引用。另一个很常见的应用是使用散列表来表示对象。JavaScript 语言内部就是使用散列表来表示每个对象。此时，对象的每个属性和方法（成员）被存储为 key 对象类型，每个 key 指向对应的对象成员。
```

创建:

```
const { defaultToString, ValuePair } = require('./01.创建字典类')
class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStrFn(key)
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37 //为了得到比较小的数值，我们会使用 hash 值和一个任意数做除法的余数）——这可以规避操作数超过数值变量最大表示范围的风险。
  }
  hashCode(key) {
    return this.loseloseHashCode(key)
  }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }
    return false
  }
  get(key) {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }
  remove(key) {
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    if (valuePair != null) {
      delete this.table[hash]
      return true
    }
    return false
  }
}

const hash = new HashTable()
hash.put('Gandalf', 'gandalf@email.com')
hash.put('John', 'johnsnow@email.com')
hash.put('Tyrion', 'tyrion@email.com')
console.log(hash.hashCode('Gandalf') + ' - Gandalf')
console.log(hash.hashCode('John') + ' - John')
console.log(hash.hashCode('Tyrion') + ' - Tyrion')
console.log(hash.get('Gandalf'))

```

###### 5.散列集合

概念:

```
在一些编程语言中，还有一种叫作散列集合的实现。散列集合由一个集合构成，但是插入、移除或获取元素时，使用的是 hashCode 函数。我们可以复用本章中实现的所有代码来实现散列集合，不同之处在于，不再添加键值对，而是只插入值而没有键。例如，可以使用散列集合来存储所有的英语单词（不包括它们的定义）。和集合相似，散列集合只存储不重复的唯一值。
```

###### 6.处理散列表中的冲突

概念:

```
	有时候，一些键会有相同的散列值。不同的值在散列表中对应相同位置的时候，我们称其为冲突。
```

冲突:

```
const hash = new HashTable();
hash.put('Ygritte', 'ygritte@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Jack', 'jack@email.com');
hash.put('Jasmine', 'jasmine@email.com');
hash.put('Jake', 'jake@email.com');
hash.put('Nathan', 'nathan@email.com');
hash.put('Athelstan', 'athelstan@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Aethelwulf', 'aethelwulf@email.com');
hash.put('Sargeras', 'sargeras@email.com');
通过对每个提到的名字调用 hash.hashCode 方法，输出结果如下。
4 - Ygritte
5 - Jonathan
5 - Jamie
7 - Jack
8 - Jasmine
9 - Jake
10 - Nathan
7 - Athelstan
5 - Sue
5 - Aethelwulf
10 - Sargeras 
注意，Nathan 和 Sargeras 有相同的散列值（10）。Jack 和 Athelstan 有相同的散列值（7），Jonathan、Jamie、Sue 和 Aethelwulf 也有相同的散列值（5）。

在调用 console.log(hashTable.toString())后，我们会在控制台中得到下面的输出结果。
{4 => [#Ygritte: ygritte@email.com]}
{5 => [#Aethelwulf: aethelwulf@email.com]}
{7 => [#Athelstan: athelstan@email.com]}
{8 => [#Jasmine: jasmine@email.com]}
{9 => [#Jake: jake@email.com]}
{10 => [#Sargeras: sargeras@email.com]}

Jonathan、Jamie、Sue 和 Aethelwulf 有相同的散列值，也就是 5。由于 Aethelwulf是最后一个被添加的，它将是在 HashTable 实例中占据位置 5 的元素。首先 Jonathan 会占据这个位置，然后 Jamie 会覆盖它，Sue 会再次覆盖，最后 Aethelwulf 会再覆盖一次。这对于其他发生冲突的元素来说也是一样的。
```

意义:

```js
	使用一个数据结构来保存数据的目的显然不是丢失这些数据，而是通过某种方法将它们全部保存起来。因此，当这种情况发生的时候就要去解决。处理冲突有几种方法：分离链接、线性探查和双散列法。
```

分离链接

分离链接法包括为散列表的每一个位置创建一个链表并将元素存储在里面。它是解决冲突的最简单的方法，但是在 HashTable 实例之外还需要额外的存储空间。

```
const { HashTable } = require('./02.散列表')
const { defaultToString, ValuePair } = require('./01.创建字典类')
const { LinkedList } = require('../03.链表/01.创建链表')
// 1. 分离链接
class HashTableSeparateChaining extends HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  // 重写 HashTable的 put
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      if (this.table[position] == null) {
        this.table[position] = new LinkedList()
      }
      this.table[position].push(new ValuePair(key, value))
      return true
    }
    return false
  }
  get(key) {
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead()
      while (current != null) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
    }
    return undefined
  }
  remove(key) {
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead()
      while (current != null) {
        if (current.element.key === key) {
          linkedList.remove(current.element)
          if (linkedList.isEmpty()) {
            delete this.table[position]
          }
          return true
        }
        current = current.next
      }
    }
    return false
  }
}
```

 线性探查

 	另一种解决冲突的方法是线性探查。之所以称作线性，是因为它处理冲突的方法是将元素直 接存储到表中，而不是在单独的数据结构中。 当想向表中某个位置添加一个新元素的时候，如果索引为 position 的位置已经被占据了, 就尝试 position+1 的位置。如果 position+1 的位置也被占据了，就尝试 position+2 的位 置，以此类推，直到在散列表中找到一个空闲的位置。想象一下，有一个已经包含一些元素的散 列表，我们想要添加一个新的键和值。我们计算这个新键的 hash，并检查散列表中对应的位置 是否被占据。如果没有，我们就将该值添加到正确的位置。如果被占据了，我们就迭代散列表， 直到找到一个空闲的位置。

​	线性探查技术分为两种。第一种是软删除方法。我们使用一个特殊的值（标记）来表示键 值对被删除了（惰性删除或软删除），而不是真的删除它。经过一段时间，散列表被操作过后， 我们会得到一个标记了若干删除位置的散列表。这会逐渐降低散列表的效率，因为搜索键值会 随时间变得更慢。能快速访问并找到一个键是我们使用散列表的一个重要原因。

​	第二种方法需要检验是否有必要将一个或多个元素移动到之前的位置。当搜索一个键的时 候，这种方法可以避免找到一个空位置。如果移动元素是必要的，我们就需要在散列表中挪动键 值对。



###### 7.创建更好的散列函数

```
	我们实现的 lose lose 散列函数并不是一个表现良好的散列函数，因为它会产生太多的冲突。一个表现良好的散列函数是由几个方面构成的：插入和检索元素的时间（即性能），以及较低的冲突可能性。我们可以在网上找到一些不同的实现方法，也可以实现自己的散列函数。
另一个可以实现的、比 lose lose 更好的散列函数是 djb2。
  	djb2HashCode(key) {
 		const tableKey = this.toStrFn(key); // {1}
 		let hash = 5381; // {2}
 		for (let i = 0; i < tableKey.length; i++) { // {3}
 		hash = (hash * 33) + tableKey.charCodeAt(i); // {4}
 	}
 return hash % 1013; // {5}
}
	在将键转化为字符串之后（行{1}），djb2HashCode 方法包括初始化一个 hash 变量并赋值为一个质数（行{2}——大多数实现都使用 5381），然后迭代参数 key（行{3}），将 hash 与 33相乘（用作一个幻数①幻数在编程中指直接使用的常数。），并和当前迭代到的字符的 ASCII 码值相加（行{4}）。最后，我们将使用相加的和与另一个随机质数相除的余数（行{5}），比我们认为的散列表大小要大。在本例中，我们认为散列表的大小为 1000。

这并不是最好的散列函数，但这是最受社区推崇的散列函数之一。
```

###### 8.ES2015 Map 类

```
	ECMAScript 2015 新增了 Map 类。可以基于 ES2015 的 Map 类开发我们的 Dictionary 类。
```

###### 9.ES2105 WeakMap 类和 WeakSet 类

```
	除了 Set 和 Map 这两种新的数据结构，ES2015还增加了它们的弱化版本，WeakSet 和 WeakMap。
	基本上，Map 和 Set 与其弱化版本之间仅有的区别是：
		 WeakSet 或 WeakMap 类没有 entries、keys 和 values 等方法；
		 只能用对象作为键。
	创建和使用这两个类主要是为了性能。WeakSet 和 WeakMap 是弱化的（用对象作为键），没有强引用的键。这使得 JavaScript 的垃圾回收器可以从中清除整个入口。另一个优点是，必须用键才可以取出值。这些类没有 entries、keys 和 values 等迭代器方法，因此，除非你知道键，否则没有办法取出值
```



### 06.递归

###### 1.概念

```
	递归是一种解决问题的方法，它从解决问题的各个小部分开始，直到解决最初的大问题(归化思想)。递归通常涉及函数调用自身。或者间接调用自身.
```





```

```

### 07.树

```

```

### 08.二叉树和堆排序

```

```

### 09.图

```

```

### 10.排序和搜索算法

```

```

### 11.算法设计与技巧

```

```

### 12.算法复杂度

```

```

### 13.最后的话

```

```

