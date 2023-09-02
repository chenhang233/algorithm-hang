const knapSack = (capacity, weights, values) => {
  let val = 0
  let load = 0
  for (let i = 0; i < values.length; i++) {
    if (capacity - load >= weights[i]) {
      val += values[i]
      load += weights[i]
    } else {
      const r = (capacity - load) / weights[i]
      val += r * values[i]
    }
  }
  console.log(load, 'load', val, 'val')
  return val
}

const values = [3, 4, 5],
  weights = [2, 3, 4],
  capacity = 6

// 允许存一部分(分数)

knapSack(capacity, weights, values)
