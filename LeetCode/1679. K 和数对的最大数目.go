func maxOperations(nums []int, k int) int {
    sort.Ints(nums)
    res := 0
    left,right := 0,len(nums) - 1
    for left < right {
        temp := nums[left] + nums[right]
        if temp == k {
            res++
            left++
            right--
        } else if temp < k {
            left++
        } else {
            right--
        }
    }
    return res
}