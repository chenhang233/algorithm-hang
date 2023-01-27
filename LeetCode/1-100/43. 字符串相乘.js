/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  let L1 = num1.length,
    L2 = num2.length,
    res = Array.from({ length: L1 + L2 }, (_) => 0)
  console.log(res, 'res')
  for (let i = L1 - 1; i >= 0; --i) {
    for (let j = L2 - 1; j >= 0; --j) {
      const product = num1[i] * num2[j]
      let position1 = j + i,
        position2 = j + i + 1
      let sum = product + res[position2]
      res[position1] += Math.floor(sum / 10)
      res[position2] = sum % 10
    }
  }
  if (!res[0]) res.shift()
  return res.join('')
}
