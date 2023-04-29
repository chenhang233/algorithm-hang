func splitArray(nums []int, k int) int {
	left, right := 0, 0
	for i := 0; i < len(nums); i++ {
		right += nums[i]
		if left < nums[i] {
			left = nums[i]
		}
	}
	for left < right {
		mid := (right-left)/2 + left
		if checkLeft(nums, mid, k) {
			right = mid
		} else {
			left = mid + 1
		}
	}
	return left
}

func checkLeft(nums []int, x, k int) bool {
	sum, cnt := 0, 1
	for i := 0; i < len(nums); i++ {
		if nums[i]+sum > x {
			sum = nums[i]
			cnt++
		} else {
			sum += nums[i]
		}
	}
	return cnt <= k
}