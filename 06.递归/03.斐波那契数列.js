// 迭代求斐波那契数
function fibonacciIterative(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  let f = n
  let f_2 = 0
  let f_1 = 1
  for (let i = 2; i <= n; i++) {
    f = f_1 + f_2
    f_2 = f_1
    f_1 = f
  }
  return f
}
console.log(fibonacciIterative(2))
// 递归求斐波那契数

function fibonacciIterative2(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  return fibonacciIterative2(n - 1) + fibonacciIterative2(n - 2)
}

console.log(fibonacciIterative2(3))
