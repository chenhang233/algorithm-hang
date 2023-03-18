func beautifulSubarrays(nums []int) (ans int64)  {
	s := make([]int, len(nums)+1)
	for i, x := range nums {
		s[i+1] = s[i] ^ x
	}
	cnt := make(map[int]int)
	for _, x := range s {
		ans += int64(cnt[x])
	    fmt.Println("ans",ans)
		cnt[x]++
	}
	return 
}