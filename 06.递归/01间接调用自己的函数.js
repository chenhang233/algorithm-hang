function fn() {
  console.log('fn')
  setInterval(() => {
    fn2()
  }, 100)
}

function fn2() {
  console.log('fn2')
  setInterval(() => {
    fn()
  }, 200)
}

console.log(fn())
