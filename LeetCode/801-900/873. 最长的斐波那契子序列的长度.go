func lenLongestFibSubseq(arr []int) int {
	maxLength := -1
	n := len(arr)
	hashMap := map[int]bool{}
	for _, v := range arr {
		hashMap[v] = true
	}
	for i := 0; i < n-maxLength; i++ {
		for j := i + 1; j < n-maxLength+1; j++ {
			prev := arr[i]
			cur := arr[j]
			next := prev + cur
			curLen := 2
			for hashMap[next] {
				curLen++
				prev = cur
				cur = next
				next = prev + cur
			}
			if curLen > maxLength {
				maxLength = curLen
			}
		}
	}
	if maxLength == 2 {
		return 0
	}
	return maxLength
}


func lenLongestFibSubseq(arr []int) int {
	n := len(arr)
	m := make(map[int]int,n)
	ans := 0
	for i,x := range arr {
		m[x] = i
	}
	dp := make([][]int,n)
	for i := range dp {
		dp[i] = make([]int,n)
	}
	for i,x := range arr {
		for j:= n -1; j >= 0 && arr[j]*2 > x; j-- {
			if k,ok := m[x - arr[j]]; ok {
				dp[j][i] = max(dp[k][j] + 1,3)
				ans = max(dp[j][i],ans)		
			}
		}
	}
	return ans
}

func max(a,b int) int {
	if a > b {
		return a
	}
	return b
}