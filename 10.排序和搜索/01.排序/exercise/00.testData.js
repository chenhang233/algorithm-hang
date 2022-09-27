const arr1 = [5, 4, 3, 1, 2]
const arr2 = [5, 4, 3, 2, 1]
const arr3 = [1, 2, 3, 4, 5]
const arr4 = [1, 3, 5, 7, 6, 2, 4]

const exampleMatrixArray = [arr1, arr2, arr3, arr4]

const exampleMatrixFn = (fn) => {
  exampleMatrixArray.forEach((arr) => console.log(fn(arr)))
}

module.exports = {
  exampleMatrixFn,
}
