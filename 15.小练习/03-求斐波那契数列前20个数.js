// 已知 第一项 1 第二项 1 求前20个数
const arr = []
arr[1] = 1
arr[2] = 1

for (let i = 3; i < 20; i++) {
  arr[i] = arr[i - 1] + arr[i - 2]
}

// console.log(arr)

// 递归 --- 尾调用优化

function out(n) {
  return fb(0, 1, n)
}

function fb(a, b, n) {
  if (n === 0) {
    return a
  }
  return fb(b, a + b, n - 1)
}

console.log(out(10))
