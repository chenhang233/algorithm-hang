func equalPairs(grid [][]int) int {
    n := len(grid)
    m := make(map[string]int)
    for _,v := range grid {
        m[fmt.Sprint(v)]++
    }
    res := 0
    for i:=0;i<n;i++ {
        arr := make([]int,n)
        for j:=0;j<n;j++ {
            arr[j] = grid[j][i]
        }
        if val,ok := m[fmt.Sprint(arr)];ok {
            res += val
        }
    }
    return res
}