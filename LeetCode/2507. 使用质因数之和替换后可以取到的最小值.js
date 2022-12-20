function smallestValue(n) {
  let pre = 0
  while (n != pre) {
    pre = n
    let sum = 0
    for (let i = 2; i * i <= n; ++i) {
      while (n % i == 0) {
        sum += i
        n /= i
      }
    }
    sum += n > 1 ? n : 0
    n = sum
  }
  return n
}
console.log(smallestValue(15))
