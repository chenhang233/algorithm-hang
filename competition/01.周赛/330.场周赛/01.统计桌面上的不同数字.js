/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function (n) {
  let count = 0
  const map = {}
  const fn = (n) => {
    for (let i = 1; i <= n; i++) {
      if (n % i == 1 && !map[i]) {
        map[i] = true
        count++
        fn(i)
      }
    }
  }
  fn(n)
  return count + 1
}

console.log(distinctIntegers(3))
console.log(distinctIntegers(5))
