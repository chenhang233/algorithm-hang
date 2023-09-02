function findMaxChildrenStr(str) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    let temp = []
    for (let j = i; j < str.length; j++) {
      if (!temp.includes(str[j])) {
        temp.push(str[j])
      } else {
        if (result.length < temp.length) {
          result = temp
        }
      }
    }
  }
  return result.join('')
}

console.log(findMaxChildrenStr('asdasdcvcd'), '1')
