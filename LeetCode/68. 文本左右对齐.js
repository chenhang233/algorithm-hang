/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const getBlank = (num, i, arr = []) => {
    if (i === 1) {
      arr.push(num)
      return arr
    }
    if (num % i === 0) {
      for (let k = 0; k < i; k++) {
        arr.push(num / i)
      }
      return arr
    }
    let k = Math.ceil(num / i)
    arr.push(k)
    num -= k
    i--
    return getBlank(num, i, arr)
  }
  const resultArr = [],
    countArr = [],
    endArr = []
  let count = 0,
    len = words.length
  for (let i = 0; i < len; i++) {
    const p = []
    resultArr.push(p)
    for (let j = i; j < len; j++) {
      if (p.length + count + words[j].length > maxWidth) {
        countArr.push(count)
        count = 0
        i = j - 1
        break
      } else {
        p.push(words[j])
        count += words[j].length
        if (j === len - 1) {
          i = j
          countArr.push(count)
          count = 0
        }
      }
    }
  }
  for (let i = 0; i < countArr.length; i++) {
    const strArr = []
    if (i === countArr.length - 1) {
      if (resultArr[i].length === 1) {
        let s = ''
        for (let j = 0; j < maxWidth - resultArr[i][0].length; j++) {
          s += ' '
        }
        strArr.push(s)
      } else if (resultArr[i].length > 1) {
        for (let g = 0; g < resultArr[i].length; g++) {
          if (g === resultArr[i].length - 1) {
            let s = ''
            for (
              let b = 0;
              b <
              maxWidth -
                (resultArr[i].length - 1) -
                countArr[countArr.length - 1];
              b++
            ) {
              s += ' '
            }
            strArr.push(s)
            break
          }
          strArr.push(' ')
        }
      }
    } else {
      let blank = []
      if (resultArr[i].length === 1) {
        blank = [maxWidth - countArr[i]]
      } else {
        blank = getBlank(maxWidth - countArr[i], resultArr[i].length - 1, [])
      }
      for (let q = 0; q < blank.length; q++) {
        let s = ''
        for (let j = 0; j < blank[q]; j++) {
          s += ' '
        }
        strArr.push(s)
      }
    }
    let str = ''
    for (let j = 0; j < resultArr[i].length; j++) {
      str += resultArr[i][j] + (strArr[j] ?? '')
    }
    endArr.push(str)
  }
  return endArr
}
