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
