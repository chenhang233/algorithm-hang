function numberToStr(num) {
  const cnNmus = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const cnIntRadix = ['', '拾', '佰', '仟']
  const cnIntUnits = ['', '万', '亿', '兆']
  let minuFlag = '负'
  let cnStr = ''
  num = num.toString()
  if (num[0] === '-') {
    cnStr += minuFlag
    num = num.slice(1)
  }
  console.log(num)
  let zero = 0
  for (let i = 0; i < num.length; i++) {
    let char = num[i]
    let n = num.length - 1 - i
    let p = n / 4
    let q = n % 4
    console.log(char)
    if (char === '0') {
      zero++
    } else {
      if (zero > 0) {
        cnStr += cnNmus[0]
      }
      zero = 0
      cnStr += cnNmus[char] + cnIntRadix[q]
    }
    if (q === 0 && zero < 4) {
      cnStr += cnIntUnits[p]
    }
    console.log(cnStr, zero)
  }
}

numberToStr(10000010)
