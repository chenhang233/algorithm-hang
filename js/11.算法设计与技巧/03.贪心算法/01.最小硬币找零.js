const minCoinChange = (cions, value) => {
  const select = []
  let acount = 0
  for (let i = cions.length - 1; i >= 0; i--) {
    while (acount + cions[i] <= value) {
      acount += cions[i]
      select.push(cions[i])
    }
  }
  console.log(select)
}

minCoinChange([1, 2, 5, 6], 20)
