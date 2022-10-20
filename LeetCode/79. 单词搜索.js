/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const row = board.length,
    col = board[0].length
  const visitBoard = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => false)
  )
  const backtrack = (i, j, word_i) => {
    if (board[i][j] !== word[word_i]) return false
    if (word_i === word.length - 1) return true
    const direction = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ]
    let result = false
    visitBoard[i][j] = true
    for (let [x, y] of direction) {
      const nexti = i + x,
        nextj = j + y
      if (0 <= nexti && nexti < row && 0 <= nextj && nextj < col) {
        if (!visitBoard[nexti][nextj]) {
          const flag = backtrack(nexti, nextj, word_i + 1)
          if (flag) {
            result = true
            break
          }
        }
      }
    }
    visitBoard[i][j] = false
    return result
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let flag = backtrack(i, j, 0)
      if (flag) return true
    }
  }
  return false
}
