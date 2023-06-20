func productExceptSelf(nums []int) []int {
    length := len(nums)
    L,R,answer := make([]int,length),make([]int,length),make([]int,length)
    L[0] = 1
    for i := 1;i < length;i++ {
        L[i] = L[i - 1] * nums[i - 1]
    }
    R[length - 1] = 1
    for i := length - 2;i >= 0;i-- {
        R[i] = R[i +1] * nums[i + 1]
    }
    for i := 0;i < length;i++ {
        answer[i] = L[i] * R[i]
    } 
    return answer
}