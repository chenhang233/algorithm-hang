const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const p = Math.floor(Math.random() * (1 + i))
    ;[arr[i], arr[p]] = [arr[p], arr[i]]
  }
  return arr
}

for (let index = 0; index < 100; index++) {
  console.log(shuffle([8, 5, 48, 8, 4, 3, 1, 3, 9]))
}
