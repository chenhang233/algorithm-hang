const sequentialSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return true
  }
  return false
}

console.log(sequentialSearch([5, 7, 1], 1))
