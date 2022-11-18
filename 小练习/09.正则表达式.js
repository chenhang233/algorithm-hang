const test1 = '15345_阿萨德变化就_21651'
const reg = /^(\d+)_(.*)_(\d+)$/
// 数字+下划线+汉字+下划线+数字
console.log(reg.test(test1))
