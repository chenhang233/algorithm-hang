/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let flag = true
  A: for (let i = 0; i < board.length; i++) {
    let prevArr = [board[i][0]]
    for (let j = 0; j < board[i].length; j++) {
      if (i === 0) {
        let prevArr2 = [board[i][j]]
        for (let k = 1; k < board.length; k++) {
          for (let n = 0; n < prevArr2.length; n++) {
            if (board[k][j] !== '.' && prevArr2[n] === board[k][j]) {
              flag = false
              break A
            }
          }
          if (board[k][j] !== '.') {
            prevArr2.push(board[k][j])
          }
        }
      }
      if (j > 0) {
        if (board[i][j] !== '.') {
          for (let n = 0; n < prevArr.length; n++) {
            if (board[i][j] === prevArr[n]) {
              flag = false
              break A
            }
          }
          prevArr.push(board[i][j])
        }
      }
      if ((i === 0 || i % 3 === 0) && (j === 0 || j % 3 === 0)) {
        const prev3Arr = []
        for (let n = i; n < i + 3; n++) {
          for (let m = j; m < j + 3; m++) {
            if (board[n][m] !== '.') {
              if (prev3Arr.length > 0) {
                for (let l = 0; l < prev3Arr.length; l++) {
                  if (prev3Arr[l] === board[n][m]) {
                    flag = false
                    break A
                  }
                }
              }

              prev3Arr.push(board[n][m])
            }
          }
        }
      }
    }
  }
  return flag
}
