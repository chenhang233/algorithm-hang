globalThis.identity = 'The Window'
let object = {
  identity: 'My Object',
  getIdentity() {
    return this.identity
  },
}

object.getIdentity()
console.log((object.getIdentity = object.getIdentity)()) // 因为赋值表达式的值是函数本身,this值不再与任何对象绑定
