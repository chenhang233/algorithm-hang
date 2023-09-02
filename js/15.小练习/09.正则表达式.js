const test1 = '15345_阿萨德变化就_21651'
const reg = /^(\d{8,12})_([\u4e00-\u9fa5]{6})_(\d+)$/
// 数字+下划线+汉字+下划线+数字
console.log(reg.test(test1))
