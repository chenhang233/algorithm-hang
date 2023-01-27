var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (temp + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}

console.log(twoSum([1, 2, 3], 3))
