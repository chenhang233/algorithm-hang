const findValues = (n, capacity, db, weights, values) => {
  let i = n
  let k = capacity
  while (i > 0 && k > 0) {
    if (db[i][k] !== db[i - 1][k]) {
      console.log(`物品${i}的重量是${weights[i - 1]}, 价值是${values[i - 1]}`)
      i--
      k -= db[i][k]
    } else {
      i--
    }
  }
}

const knapSack = (capacity, weights, values, n) => {
  const db = []
  for (let i = 0; i <= n; i++) {
    db[i] = []
  }
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (i === 0 || j === 0) {
        db[i][j] = 0
      } else if (weights[i - 1] <= j) {
        const a = values[i - 1] + db[i - 1][j - weights[i - 1]]
        const b = db[i - 1][j]
        db[i][j] = a > b ? a : b
      } else {
        db[i][j] = db[i - 1][j]
      }
    }
  }
  findValues(n, capacity, db, weights, values)
  return db[n][capacity]
}

const values = [3, 4, 5], // 包值
  weights = [2, 3, 4], // 包重量
  capacity = 5, // 容量
  n = values.length // 包数量
console.log(knapSack(capacity, weights, values, n))
