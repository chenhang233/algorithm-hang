func longestSubarray(nums []int) int {
    k := 1
    left,right,n := 0,0,len(nums)
    res := 0
    for right < n {
        if nums[right] == 0 {
            k--
        }
        for k < 0 {
            if nums[left] == 0 {
            k++
            }
            left++
        }
        temp := right - left
        if temp > res {
            res = temp
        }
        right++
    }
    return res
}