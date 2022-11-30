function NumToStr(money) {
  const cnNmus = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const cnIntRadix = ['', '拾', '佰', '仟']
  const cnIntUnits = ['', '万', '亿', '兆']
  const cnDecimalUnits = ['角', '分', '毫', '厘']
  const cnInteger = '整'
  const cnIntLast = '元'
  let IntegerNum
  let DecimalNum
  let chinesStr = ''
  let parts
  let Symbol = ''
  if (money === 0) {
    chinesStr = cnNmus[0] + cnIntLast + cnInteger
    return chinesStr
  }
  money = parseFloat(money)
  if (money < 0) {
    money = -money
    Symbol = '负 '
  }
  money = money.toString()
  if (!money.includes('.')) {
    IntegerNum = money
    DecimalNum = ''
  } else {
    parts = money.split('.')
    IntegerNum = parts[0]
    DecimalNum = parts[1].substr(0, 4)
  }
  if (parseInt(money, 10) > 0) {
    let zeroCount = 0
    let IntLen = IntegerNum.length
    for (let i = 0; i < IntLen; i++) {
      let n = IntegerNum.substr(i, 1)
      let p = IntLen - 1 - i // 前一位index
      let q = p / 4
      let m = p % 4
      if (n == 0) {
        zeroCount++
      } else {
        if (zeroCount > 0) {
          chinesStr += cnNmus[0]
        }
        zeroCount = 0
        chinesStr += cnNmus[parseInt(n)] + cnIntRadix[m]
      }
      if (m == 0 && zeroCount < 4) {
        chinesStr += cnIntUnits[q]
      }
    }
    chinesStr += cnIntLast
  }
  if (DecimalNum != '') {
    let decLen = DecimalNum.length
    for (let i = 0; i < decLen; i++) {
      let n = DecimalNum.substr(i, 1)
      if (n != 0) {
        chinesStr += cnNmus[Number(n)] + cnDecimalUnits[i]
      }
    }
  }
  if (chinesStr == '') {
    chinesStr += cnNmus[0] + cnIntLast + cnInteger
  } else if (DecimalNum == '') {
    chinesStr += cnInteger
  }
  chinesStr = Symbol + chinesStr
  return chinesStr
}

console.log(NumToStr(0))
console.log(NumToStr(100000100))
