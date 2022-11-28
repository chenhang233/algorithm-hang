const arr = [{ a: 3 }, { a: 5 }]

const r = arr.map((v) => {
  if (v === 5) {
    setTimeout(() => {
      v.a = 50
    }, 10)
  }
  return v
})

console.log(r)

setTimeout(() => {
  console.log(r)
}, 100)
