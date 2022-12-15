function Fn() {
  this.a = 50
  return this.a
}

function fn(a, b, callback) {
  const origin = callback
  console.log('1')
  callback = function () {
    const ins = new Fn()
    origin.call(ins, 123)
  }
  callback()
}

fn(1, 2, function (res) {
  console.log(this.a, res)
})
