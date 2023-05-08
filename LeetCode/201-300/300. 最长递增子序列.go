func lengthOfLIS(nums []int) int {
	l := len(nums)
	if l == 0 {
		return 0
	}
	var dp []int
	dp = append(dp, 1)
	maxAnswer := 1
	for i := 1; i < l; i++ {
		t := nums[i]
		dp = append(dp, 1)
		for j := 0; j < i; j++ {
			if t > nums[j] {
				dp[i] = Max(dp[i],dp[j]+1)
			}
		}
		maxAnswer =  Max(dp[i],maxAnswer)
	}
	return maxAnswer
}

func Max(a, b int) int {
	if a > b {
		return a
	} else {
		return b
	}
}