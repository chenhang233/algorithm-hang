// 转换成十进制
// 二进制: 110010011111 10110101110
// 八进制: 6137 2654
// 十六进制: 3AB ED5
function anyToDecimal(scale, str) {
  const digit = ['A', 'B', 'C', 'D', 'E', 'F']
  let decimal = 0
  for (let i = 0; i < str.length; i++) {
    let place = str[str.length - i - 1]
    const a = digit.findIndex((k) => k === place)
    decimal += Math.pow(scale, i) * (a === -1 ? place : a + 10)
  }
  console.log(decimal)
  return decimal
}
anyToDecimal(2, '110010011111')
anyToDecimal(2, '10110101110')
anyToDecimal(8, '6137')
anyToDecimal(8, '2654')
anyToDecimal(16, '3AB')
anyToDecimal(16, 'ED5')

// 转换成 二进制 和十六进制
// 十进制: 156 2608 1043

function DeciamlToAny(scale, str) {
  let s = ''
  while (str) {
    s = (str % 2) + s
    str = Math.floor(str / 2)
  }
  console.log(s)
}
DeciamlToAny(2, '156')
DeciamlToAny(2, '2608')
DeciamlToAny(2, '1043')
DeciamlToAny(16, '1043')
DeciamlToAny(16, '1043')
DeciamlToAny(16, '1043')
