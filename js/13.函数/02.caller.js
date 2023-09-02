// ECMAScript 5 也会给函数对象上添加一个属性：caller。
// 。这个属性引用的是调用当前函数的函数，或者如果是 在全局作用域中调用的则为 null。
function outer() {
  inner()
}
function inner() {
  console.log(inner.caller)
}
outer()

// 以上代码会显示 outer()函数的源代码。这是因为 ourter()调用了 inner()，inner.caller
// 指向 outer()。如果要降低耦合度，则可以通过 arguments.callee.caller 来引用同样的值
function outer() {
  inner()
}
function inner() {
  console.log(arguments.callee.caller)
}
outer()
