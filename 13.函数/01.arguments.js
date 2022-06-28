// 阶乘函数
function factorial(num) {
  if (num === 1) return 1
  return num * factorial(num - 1)
}

// arguments是一个类数组的对象 它有一个属性 callee 指向arguments对象所在函数的指针
// 作用: 这个函数要正确执行就必须保证函数名是 factorial，从而导致了紧密耦合。使用 arguments.callee 就可以让函数逻辑与函数名解耦
console.log(factorial(5))

function factorial2(num) {
  if (num === 1) return 1
  return num * arguments.callee(num - 1)
}

let fa = factorial2

console.log(factorial2(5))
console.log(fa(5))
