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