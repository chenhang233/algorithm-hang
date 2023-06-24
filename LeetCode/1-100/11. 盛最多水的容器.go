func maxArea(height []int) int {
    n := len(height)
    left,right := 0,n - 1
    res := 0
    for left < right {
        curLen := right -left
        tail := 0
        if height[left] > height[right] {
            tail = height[right]
            right--
        } else {
            tail = height[left]
            left++
        }
        res = max(curLen*tail,res)
    }
    return res
}


func max(a,b int) int {
    if a > b {
        return a
    } else {
        return b
    }
}