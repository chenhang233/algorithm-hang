// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('123231')
//   }, 1000)
// })
// setTimeout((t) => console.log(t), 1000, p)

function addTwo(x) {
  return x + 2
}
function addThree(x) {
  return x + 3
}
function addFive(x) {
  return x + 5
}

function addTen1(x) {
  return addFive(addThree(addTwo(x)))
}

console.log(addTen1(10))

function addTen2(x) {
  return Promise.resolve(x)
    .then((x) => addTwo(x))
    .then((x) => addThree(x))
    .then((x) => addFive(x))
}

addTen2(10).then((x) => console.log(x))

function addTen3(x) {
  return [addTwo, addThree, addFive].reduce(
    (promise, current) => promise.then(current),
    Promise.resolve(x)
  )
}

addTen3(10).then((x) => {
  console.log(x)
})
