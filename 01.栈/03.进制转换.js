// 十进制 => N进制
const baseConverter = (number, n = 2) => {
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const stack = []
  if (n < 2 || n > 36) return 'error'
  while (number) {
    stack.push(Math.floor(number % n))
    number = Math.floor(number / n)
  }
  const res = stack.map((v) => digits[v])
  return res.reverse().join('')
}

console.log(baseConverter(100345, 2))
console.log(baseConverter(100345, 8)) // 303771
console.log(baseConverter(100345, 16)) // 187F9
console.log(baseConverter(100345, 35)) // 2BW0
