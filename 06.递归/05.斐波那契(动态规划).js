function getFb(n) {
  if (n === 0) return 0
  const dp = Array.from({ length: n - 1 })
  console.log(dp)
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i < dp.length; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  console.log(dp)
  return dp[n]
}

console.log(getFb(5))
