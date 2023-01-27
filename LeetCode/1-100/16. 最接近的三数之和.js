var threeSumClosest = function (nums, target) {
  let N = nums.length
  let res = Number.MAX_SAFE_INTEGER
  nums.sort((a, b) => a - b)
  for (let i = 0; i < N; i++) {
    let left = i + 1
    let right = N - 1
    let num1 = nums[i]
    while (left < right) {
      let sum = num1 + nums[left] + nums[right]
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }
      if (sum < target) {
        left++
      } else if (sum > target) {
        right--
      } else {
        return sum
      }
    }
  }
  return res
}
