### js算法

##### 01.栈(stack)

###### 0.LIFO

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

```

```

##### 03.链表

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

