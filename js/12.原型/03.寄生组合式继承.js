function clone(parent, child) {
  child.prototype = Object.create(parent.prototype)
  child.prototype.constructor = child
}

function Parent(name) {
  this.name = name
}

Parent.prototype.getName = function () {
  return this.name
}

clone(Parent, Child)

function Child(age, name) {
  Parent.call(this, name)
  this.age = age
}

Child.prototype.getAge = function () {
  return this.age
}

const c1 = new Child(18, 'name')
const c2 = new Child(187, 'name2')
console.log(c1)
console.log(c2)
