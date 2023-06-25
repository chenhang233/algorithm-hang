func findMaxAverage(nums []int, k int) float64 {
    f1,f2  := 0,k - 1
    n := len(nums)
    if n == 1 {
        return float64(nums[0])
    }
    prefix := make([]int,n + 1)
    for i := 1;i < n + 1;i++ {
        prefix[i] = nums[i - 1] + prefix[i - 1]
    }
    res := float64(0)
    for f2 < n {
        temp := float64(prefix[f2] - prefix[f1] + nums[f2])
        temp /= float64(k)
        if res == 0 {
            res = temp
        } else if res < temp {
            res = temp
        }
        f1++
        f2++
    }
    return res
} 

func findMaxAverage(nums []int, k int) float64 {
    f1,f2  := 0,k - 1
    n := len(nums)
    if n == 1 {
        return float64(nums[0])
    }
    prefix := make([]int,n + 1)
    for i := 1;i < n + 1;i++ {
        prefix[i] = nums[i - 1] + prefix[i - 1]
    }
    resMax := 0
    for f2 < n {
        temp := prefix[f2] - prefix[f1] + nums[f2]
        if resMax == 0 {
            resMax = temp
        } else if resMax < temp {
            resMax = temp
        }
        f1++
        f2++
    }
    return float64(resMax) / float64(k)
} 