func maxProduct(nums []int) int {
	n := len(nums)
	maxF := make([]int, n)
	minF := make([]int, n)
	maxF[0] = nums[0]
	minF[0] = nums[0]
	for i := 1; i < n; i++ {
		maxF[i] = Max(nums[i]*maxF[i-1], Max(minF[i-1]*nums[i], nums[i]))
		minF[i] = Min(nums[i]*minF[i-1], Min(maxF[i-1]*nums[i],nums[i]))
	}
	ans := maxF[0]
	for i := 1; i < n; i++ {
		ans = Max(maxF[i],ans)
	}
	return ans
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

//  优化
func maxProduct(nums []int) int {
	n := len(nums)
	maxF, minF, ans := nums[0], nums[0], nums[0]
	for i := 1; i < n; i++ {
		ma,mn := maxF,minF
		maxF = Max(nums[i], Max(ma*nums[i], mn*nums[i]))
		minF = Min(nums[i], Min(ma*nums[i], mn*nums[i]))
		ans = Max(maxF, ans)
	}
	return ans
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
