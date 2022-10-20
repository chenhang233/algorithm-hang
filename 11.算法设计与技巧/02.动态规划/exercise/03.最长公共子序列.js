function lcs(wordX, wordY) {
  const x = wordX.length
  const y = wordY.length
  const l = []
  for (let i = 0; i <= x; i++) {
    l[i] = []
    for (let j = 0; j <= y; j++) {
      l[i][j] = 0
    }
  }
  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
      if (i === 0 || j === 0) {
        l[i][j] = 0
      } else if (wordX[i - 1] === wordY[j - 1]) {
        l[i][j] = l[i - 1][j - 1] + 1
      } else {
        const a = l[i - 1][j]
        const b = l[i][j - 1]
        l[i][j] = a > b ? a : b
      }
    }
  }
  return l[x][y]
}

console.log(lcs('acbaed', 'abcadf'))
