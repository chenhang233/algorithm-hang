/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function (n) {
  let map = {}
  const fn = (n) => {
    let a1, a2
    let max = 0
    let flag = false
    for (let i = n; i > 0; i--) {
      if (n % i === 0 && i !== n && i !== 1) {
        if (n === 4) {
          map = {}
          return [false, 2 + 2]
        }
        flag = true
        a1 = i
        a2 = n / i
        max = Math.max(a1 + a2, max)
        if (!map[a1 + a2]) {
          if (map[n]) delete map[n]
          map[a1 + a2] = [a1, a2]
        }
      }
    }
    return [flag, a1 + a2]
  }
  if (fn(n)[0]) {
    console.log(map, '1')
    for (const key in map) {
      let r = fn(key)
      console.log(map, '2')
      while (r[0]) {
        r = fn(r[1])
        console.log(map, '3')
      }
    }
  }
  console.log(map)
  const m = Object.keys(map)
  let res = n
  if (m.length) {
    m.forEach((v) => (res = Math.min(res, v)))
  } else {
    res = n
  }
  return res
}

console.log(
  //   smallestValue(15),
  //   smallestValue(3),
  //   smallestValue(4),
  //   smallestValue(12),
  //   smallestValue(16),
  smallestValue(15)
)
