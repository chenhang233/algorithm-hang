class Myset extends Set {
  constructor() {
    super()
  }
  add(o) {
    let f = true
    console.log(o)
    super.forEach((v) => {
      if (v.a === o.a) f = false
    })
    f && super.add(o)
  }
}
const set = new Myset()

set.add({ a: 1 })
set.add({ a: 2 })
set.add({ a: 1 })
console.log(set)
