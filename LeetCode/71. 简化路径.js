/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const pathArr = path.split('/')
  const root = []
  let str = ''
  for (let i = 0; i < pathArr.length; i++) {
    const v = pathArr[i]
    if (v) {
      if (v === '..') {
        if (root.length > 0) {
          root.pop()
        }
      } else if (v !== '.') {
        root.push(v)
      }
    }
  }
  for (let j = 0; j < root.length; j++) {
    str += '/' + root[j]
  }
  return str ? str : '/'
}

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath2 = function (path) {
  const pathArr = path.split('/')
  const root = []
  for (let p of pathArr) {
    if (p === '..') {
      if (root.length) {
        root.pop()
      }
    } else if (p !== '.' && p) {
      root.push(p)
    }
  }
  return '/' + root.join('/')
}
