/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let sum = []
  for (let i = 1; i <= n; ++i) {
    sum.push(transform(i))
  }
  function transform(num) {
    let leftover3 = num % 3
    let leftover5 = num % 5
    if (!leftover3 && !leftover5) {
      return 'FizzBuzz'
    } else if (!leftover3) {
      return 'Fizz'
    } else if (!leftover5) {
      return 'Buzz'
    } else {
      return num + ''
    }
  }
  return sum
}
