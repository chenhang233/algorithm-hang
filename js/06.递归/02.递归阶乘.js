// 求 5 的乘积 表示为 5!

function factorial(n) {
  if (n === 1) {
    return 1
  }
  return n * factorial(n - 1)
}

console.log(factorial(5))
