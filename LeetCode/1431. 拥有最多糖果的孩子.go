func kidsWithCandies(candies []int, extraCandies int) []bool {
    n := len(candies)
    max := findMax(candies)
    res := make([]bool,n)
    	for i := 0; i < n; i++ {
		if candies[i] + extraCandies  >= max {
			res[i] = true
		} else {
            res[i] = false
        }
	}
    return res
}

func findMax(arr []int) int {
	max := arr[0]
	for i := 1; i < len(arr); i++ {
		if arr[i] >= max {
			max = arr[i]
		}
	}
	return max
}