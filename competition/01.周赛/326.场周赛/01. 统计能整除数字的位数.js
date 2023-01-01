/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  const cache = {}
  let count = 0
  const arr = (num + '').split('')
  for (let i = 0; i < arr.length; i++) {
    let c = parseInt(arr[i])
    if (cache[c]) {
      count++
      continue
    }
    if (num % c === 0) {
      cache[c] = true
      count++
    }
  }
  return count
}

console.log(
  // countDigits(7),
  // countDigits(121),
  //  countDigits(1248),
  countDigits(999274365)
)

console.log(10080 % 1)
console.log(10080 % 2)
console.log(10080 % 3)
console.log(10080 % 4)
console.log(10080 % 5)
console.log(10080 % 6)
console.log(10080 % 7)
console.log(10080 % 8)
console.log(10080 % 9)
