const ratInAMaze = (maze) => {
  const y = maze.length
  const x = maze[0].length
  const solution = Array.from({ length: y }, () =>
    Array.from({ length: x }, () => 0)
  )
  const findRoad = (board, row, col) => {
    if (maze[row][col]) {
      if (row === y - 1 && col === x - 1) return true
      const direction = [
        [1, 0],
        [0, 1],
      ]
      for (const key of direction) {
        const nextRow = key[0] + row
        const nextCol = key[1] + col
        if (nextRow < y && nextCol < x && maze[nextRow][nextCol]) {
          board[nextRow][nextCol] = 1
          if (findRoad(board, nextRow, nextCol)) return true
          board[nextRow][nextCol] = 0
        }
      }
    }
  }
  solution[0][0] = 1
  return findRoad(solution, 0, 0) ? solution : false
}

const maze = [
  [1, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
  [0, 1, 1, 1],
]
console.log(ratInAMaze(maze))
