function minCoinChange(coins, acount) {
  const cache = []
  const makeChange = (value) => {
    if (!value) {
      return []
    }
    if (cache[value]) {
      return cache[value]
    }
    const min = []
    let newMin = []
    let newAmount
    for (let i = 0; i < coins.length; ++i) {
      const coin = coins[i]
      newAmount = value - coin
      if (newAmount >= 0) {
        console.log(newAmount, 'newAmount')
        newMin = makeChange(newAmount)
      }
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min.concat(newMin)
      }
    }
    return (cache[value] = newMin)
  }
  return makeChange(acount)
}

console.log(minCoinChange([1, 5], 5))
