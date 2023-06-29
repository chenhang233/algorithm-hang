func pivotIndex(nums []int) int {
    n := len(nums)
    perfix := make([]int,n + 1)
    for i:=1;i<=n;i++ {
        perfix[i] = perfix[i - 1] + nums[i - 1] 
    }
    for i:=0;i<n;i++ {
        r1,r2 := perfix[i],perfix[n] - perfix[i + 1] 
        if r1 == r2 {
            return i
        }
    }
    return -1
}