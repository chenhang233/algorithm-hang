func moveZeroes(nums []int)  {
    zeroCount := 0
    n := len(nums)
    res := make([]int, n)
    j:= 0
    for i:=0;i<n;i++ {
        if nums[i] == 0 {
            zeroCount++
        } else {
            res[j] = nums[i]
            j++
        }
    }
    for i:=0;i<n;i++ {
        nums[i] = res[i]
    }
    return
}   