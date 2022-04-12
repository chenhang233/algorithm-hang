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
