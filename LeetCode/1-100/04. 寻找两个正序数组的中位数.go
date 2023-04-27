func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	n := len(nums1) + len(nums2)
	var num3 []int
	num3 = append(num3, nums1...)
	num3 = append(num3, nums2...)
	sort.Ints(num3)
	mid := len(num3) / 2
	if n%2 == 0 {
		return float64(num3[mid] + num3[mid-1]) / 2
	} else {
		return float64(num3[mid])
	}
}