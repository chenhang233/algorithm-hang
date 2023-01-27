/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function (grid) {
  const direction = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ]
  const m = grid.length,
    n = grid[0].length
  let sx = 0,
    sy = 0
  const keyMap = new Map()
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (grid[x][y] === '@') {
        sx = x
        sy = y
      }
      if ('a' <= grid[x][y] && 'z' >= grid[x][y]) {
        keyMap.set(grid[x][y], keyMap.size)
      }
    }
  }
  const queue = []
  const keyInfoArr = Array.from({ length: m }, () =>
    Array.from({ length: n }, () =>
      Array.from({ length: 1 << keyMap.size }, () => -1)
    )
  )
  keyInfoArr[sx][sy][0] = 0
  queue.push([sx, sy, 0])
  while (queue.length) {
    const arr = queue.shift()
    const x = arr[0],
      y = arr[1],
      mask = arr[2]
    for (let i = 0; i < 4; i++) {
      const nx = direction[i][0] + x
      const ny = direction[i][1] + y
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] !== '#') {
        if (grid[nx][ny] === '.' || grid[nx][ny] === '@') {
          if (keyInfoArr[nx][ny][mask] === -1) {
            keyInfoArr[nx][ny][mask] = keyInfoArr[x][y][mask] + 1
            queue.push([nx, ny, mask])
          }
        } else if (grid[nx][ny] >= 'a' && grid[nx][ny] <= 'z') {
          const nextId = keyMap.get(grid[nx][ny])
          if (keyInfoArr[nx][ny][mask | (1 << nextId)] === -1) {
            keyInfoArr[nx][ny][mask | (1 << nextId)] =
              keyInfoArr[x][y][mask] + 1
            if ((mask | (1 << nextId)) === (1 << keyMap.size) - 1) {
              return keyInfoArr[nx][ny][mask | (1 << nextId)]
            }
            queue.push([nx, ny, mask | (1 << nextId)])
          }
        } else {
          const nextId = keyMap.get(grid[nx][ny].toLowerCase())
          if ((mask & (1 << nextId)) !== 0 && keyInfoArr[nx][ny][mask] === -1) {
            keyInfoArr[nx][ny][mask] = keyInfoArr[x][y][mask] + 1
            queue.push([nx, ny, mask])
          }
        }
      }
    }
  }
  return -1
}

shortestPathAllKeys(['.@aA'])
