/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  let stack = []
  let n = expression.length
  for (let i = 0; i < n; i++) {
    if (expression[i] === ',') {
      continue
    } else if (expression[i] !== ')') {
      stack.push(expression[i])
    } else {
      let t = 0,
        f = 0
      while (stack[stack.length - 1] !== '(') {
        const v = stack.pop()
        if (v === 't') t++
        if (v === 'f') f++
      }
      stack.pop()
      const type = stack.pop()
      switch (type) {
        case '&':
          stack.push(f > 0 ? 'f' : 't')
          break
        case '|':
          stack.push(t > 0 ? 't' : 'f')
          break
        case '!':
          stack.push(t === 0 ? 't' : 'f')
          break
        default:
          break
      }
    }
  }
  return stack.pop() === 't' ? true : false
}
