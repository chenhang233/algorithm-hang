function defaultEquals(a, b) {
  return a === b
}
function sequentialSearch(array, value, equalsFn = defaultEquals) {
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(value, array[i])) {
      return i
    }
  }
  return -1
}
