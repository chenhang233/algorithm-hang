/**
 * @param {number} n
 * @return {number}
 */
var monkeyMove = function (n) {
  let count = 0
  const swap = (arr, i, j) => {
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }
  const perm = (arr, start, end) => {
    if (start == end) {
      count++
    } else {
      for (let i = start; i < end; i++) {
        if (arr[i] !== arr[start]) {
          swap(arr, i, start)
          perm(arr, start + 1, end)
          swap(arr, i, start)
        }
      }
    }
  }

  for (let i = 0; i < n - 1; i++) {
    const arr = Array.from({ length: n }, (_, j) => (j <= i ? 1 : 0))
    perm(arr, 0, n)
  }
  console.log(count)
}
// monkeyMove(2)
// monkeyMove(3)
monkeyMove(4)
