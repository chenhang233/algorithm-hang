func longestOnes(nums []int, k int) int {
    l,r,res,n := 0,0,0,len(nums)
    for r < n {
        if nums[r] == 0 {
            k--
        }
        for k < 0 {
            if nums[l] == 0 {
                k++
            }
            l++
        }
        t := r - l + 1
        if t > res {
            res = t
        }
        r++
    }
    return res
}