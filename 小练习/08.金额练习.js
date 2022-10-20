function NumToStr(money) {
  const cnNmus = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const cnIntRadix = ['', '拾', '佰', '仟']
  const cnIntUnits = ['', '万', '亿', '兆']
  let IntegerNum = money.toString()
  let chinesStr = ''
  let zeroCount = 0
  let IntLen = IntegerNum.length
  for (let i = 0; i < IntLen; i++) {
    let n = IntegerNum.substr(i, 1) // 拿到数字字符 n
    let p = IntLen - 1 - i // 当前数字对应总长度的位置比完 剩下多少
    let q = p / 4 // 大
    let m = p % 4 // 小
    console.log(p, q, m, n)
    if (n == 0) {
      zeroCount++
    } else {
      if (zeroCount > 0) {
        chinesStr += cnNmus[0]
      }
      zeroCount = 0
      chinesStr += cnNmus[parseInt(n)] + cnIntRadix[m]
    }
    console.log(zeroCount, 'zeroCount')
    if (m == 0 && zeroCount < 4) {
      console.log('inner')
      chinesStr += cnIntUnits[q]
    }
  }
  chinesStr += '元'
  return chinesStr
}

// console.log(NumToStr(1000010))
// console.log(NumToStr(100000100))

function NumToStr2(num) {
  const cnNmus = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const cnIntRadix = ['', '拾', '佰', '仟']
  const cnIntUnits = ['', '万', '亿', '兆']
  let str = ''
  num = num.toString()
  const len = num.length
  let zeroCount = 0
  for (let i = 0; i < len; i++) {
    const n = num[i]
    const index = len - 1 - i
    const q = index / 4
    const p = index % 4
    if (n == 0) {
      zeroCount++
    } else {
      if (zeroCount > 0) {
        str += cnNmus[0]
      }
      zeroCount = 0
      str += cnNmus[+n] + cnIntRadix[p]
    }
    if (p == 0 && zeroCount < 4) {
      str += cnIntUnits[q]
    }
  }
  str += '元'
  return str
}

console.log(NumToStr2(50000))
