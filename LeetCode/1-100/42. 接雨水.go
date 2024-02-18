func trap(height []int) int {
    n := len(height)
    ans := 0
    if n == 0 {
        return ans 
    }
    leftMax := make([]int, n)
    rightMax := make([]int, n)
    leftMax[0],rightMax[n-1] = height[0],height[n-1]
    for i:=1;i<n;i++ {
        leftMax[i] = max(leftMax[i - 1], height[i])
    }
    for i:=n-2;i>=0;i-- {
        rightMax[i] = max(rightMax[i + 1], height[i])
    }
    for i,v := range height {
        ans += min(leftMax[i],rightMax[i]) - v
    }
    return ans
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
