
func findNumberOfLIS(nums []int) int {
	l := len(nums)
	ans := 0
	m := 0
	dp := make([]int, l)
	cnt := make([]int, l)
	for i, k := range nums {
		dp[i] = 1
		cnt[i] = 1
		for j, x := range nums[:i] {
			if k > x {
				if dp[j]+1 > dp[i] {
					dp[i] = dp[j] + 1
					cnt[i] = cnt[j]
				} else if dp[j]+1 == dp[i] {
					cnt[i] += cnt[j]
				}
			}
		}
		if dp[i] > m {
			m = dp[i]
			ans = cnt[i]
		} else if dp[i] == m {
			ans += cnt[i]
		}
	}
	return ans
}
