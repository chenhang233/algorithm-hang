/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  const r = s.split('').reduce((a, v, i) => (a += i % 2 === Number(v)), 0)

  return Math.min(s.length - r, r)
}

minOperations('1100')
