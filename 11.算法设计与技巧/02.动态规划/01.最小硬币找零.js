function minCoinChange(coins, amount) {
  // 传入面额, 总钱数
  const cache = [] // 记忆化 存储不同钱数在当前面值数组
  const makeChange = (value) => {
    value // 当前钱数
    if (!value) {
      return []
    }
    if (cache[value]) {
      return cache[value]
    }
    let min = []
    let newMin
    let newAmount // 剩下的钱
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i]
      newAmount = value - coin
      if (newAmount >= 0) {
        newMin = makeChange(newAmount)
      }
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin)
        console.log('new Min ' + min + ' for ' + amount, value)
      }
    }
    return (cache[value] = min)
  }
  return makeChange(amount)
}

console.log(minCoinChange([1, 5, 10, 25], 36))
