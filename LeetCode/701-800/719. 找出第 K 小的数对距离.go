func smallestDistancePair(nums []int, k int) int {
	sort.Ints(nums)
		return sort.Search(nums[len(nums)-1]-nums[0], func(mid int) bool {
			cnt := 0
			for i, num := range nums {
				j := sort.SearchInts(nums[:i], num-mid)
				cnt += i - j
			}
			return cnt >= k
		})
	}