const isMatch = (s, p) => {
  if (s == null || p == null) return false
  const sLength = s.length,
    pLength = p.length
  let matrix = Array.from({ length: sLength + 1 }, (_) => Array.from({ length: pLength + 1 }, (_) => false))
  matrix[0][0] = true
  for (let i = 1; i < pLength + 1; ++i) {
    if (p[i - 1] === '*') matrix[0][i] = matrix[0][i - 2]
  }
  console.log(matrix)
  for (let i = 1; i < sLength + 1; i++) {
    for (let j = 1; j < pLength + 1; j++) {
      if (s[i - 1] == p[j - 1] || p[j - 1] == '.') {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else if (p[j - 1] == '*') {
        if (s[i - 1] == p[j - 2] || p[j - 2] == '.') {
          matrix[i][j] = matrix[i][j - 2] || matrix[i - 1][j - 2] || matrix[i - 1][j]
        } else {
          matrix[i][j] = matrix[i][j - 2]
        }
      }
    }
  }
  return matrix[sLength][pLength]
}

console.log(isMatch('aa', 'a*b*'))
