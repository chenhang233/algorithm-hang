
func maxSubarraySumCircular(nums []int) int {
	total, curMax, maxSum, curMin, minSum := nums[0], nums[0], nums[0], nums[0], nums[0]
	for _, num := range nums[1:] {
		total += num
		curMax = Max(num, curMax+num)
		maxSum = Max(curMax, maxSum)
		curMin = Min(num, curMin+num)
		minSum = Min(minSum, curMin)
	}
		fmt.Println(curMax,curMin,maxSum,minSum,total)
	if total == minSum {
		return maxSum
	} else {
			fmt.Println(curMax, curMin, maxSum, minSum, total,total-minSum)

		return Max(total-minSum, maxSum)
	}
}

func Max(a, b int) int {
	if a > b {
		return a
	} else {
		return b
	}
}
func Min(a, b int) int {
	if a < b {
		return a
	} else {
		return b
	}
}
