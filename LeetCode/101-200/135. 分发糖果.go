func candy(ratings []int) int {
    answer := 0
    n := len(ratings)
    temps := make([]int,n)
     for i, r := range ratings {
        if i > 0 && r > ratings[i-1] {
            temps[i] = temps[i-1] + 1
        } else {
            temps[i] = 1
        }
    }
    right := 0
    for i := n - 1; i >= 0; i-- {
        if i < n-1 && ratings[i] > ratings[i+1] {
            right++
        } else {
            right = 1
        }
        answer += max(temps[i], right)
    }
    return answer
}
func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}