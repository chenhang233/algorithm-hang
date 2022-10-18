/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const start_s = word[0]
  let row_max = board.length,
    col_max = board[0].length,
    word_max = word.length
  const track = (row, col, s_i, s, path) => {
    console.log(row, col, s_i, s, path)
    if (s_i === word_max - 1) return true

    if (
      row - 1 >= 0 &&
      !path[row - 1][col] &&
      board[row - 1][col] === word[s_i + 1]
    ) {
      let prev = s
      s += word[++s_i]
      path[row - 1][col] = true
      if (track(row - 1, col, s_i, s, path)) return true
      //   path[row - 1][col] = false
      s_i--
      s = prev
    }
    if (
      row + 1 < row_max &&
      !path[row + 1][col] &&
      board[row + 1][col] === word[s_i + 1]
    ) {
      let prev = s

      s += word[++s_i]
      path[row + 1][col] = true
      if (track(row + 1, col, s_i, s, path)) return true
      //   path[row + 1][col] = false
      s_i--
      s = prev
    }
    if (
      col - 1 >= 0 &&
      !path[row][col - 1] &&
      board[row][col - 1] === word[s_i + 1]
    ) {
      let prev = s

      s += word[++s_i]
      path[row][col - 1] = true
      if (track(row, col - 1, s_i, s, path)) return true
      //   path[row][col - 1] = false
      s_i--
      s = prev
    }
    if (
      col + 1 < col_max &&
      !path[row][col + 1] &&
      board[row][col + 1] === word[s_i + 1]
    ) {
      let prev = s
      s += word[++s_i]
      path[row][col + 1] = true
      if (track(row, col + 1, s_i, s, path)) return true
      //   path[row][col + 1] = false
      s_i--
      s = prev
    }
    return false
  }
  for (let i = 0; i < row_max; i++) {
    for (let j = 0; j < col_max; j++) {
      if (board[i][j] === start_s) {
        const path = Array.from({ length: row_max }, () =>
          Array.from({ length: col_max }, () => false)
        )
        path[i][j] = true
        if (track(i, j, 0, start_s, path)) return true
      }
    }
  }
  return false
}

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'E', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCESEEEFS'
  )
)
