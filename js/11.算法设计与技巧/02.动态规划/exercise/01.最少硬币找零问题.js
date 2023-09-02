const minCoinChange = (coins, amount) => {
  if (coins.length < 1 || !amount) return 'error'
  coins.sort((a, b) => b - a)
  const result = []
  let nextValue = amount
  for (let i = 0; i < coins.length; i++) {
    let currentCoin = coins[i]
    while (currentCoin <= nextValue) {
      nextValue -= currentCoin
      result.push(currentCoin)
    }
  }
  return result
}

// console.log(minCoinChange([1, 2, 5, 6], 20))

const minCoinChange2 = (coins, amount) => {
  const cache = []
  const makeChange = (value) => {
    if (!value) return []
    if (cache[value]) return cache[value]
    let min = []
    let newMin
    let newAmount
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i]
      newAmount = value - coin
      if (newAmount >= 0) newMin = makeChange(newAmount)
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin)
      }
    }
    return (cache[value] = min)
  }
  return makeChange(amount)
}

console.log(minCoinChange2([1, 2, 5, 6], 20))
