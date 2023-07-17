func minReorder(n int, connections [][]int) int {
    m1 := make(map[int][]int)
    for _,conn := range connections {
        m1[conn[0]] = append(m1[conn[0]], conn[1])
        m1[conn[1]] = append(m1[conn[1]], -conn[0])
    }
    ans := 0
    var dfs func(int,int)
    dfs = func (p,u int) {
        for _,v := range m1[p] {
            if u != v && u != -v {
                if v > 0 {
                    ans++
                } else {
                    v = -v
                }
                dfs(v,p)
            } 
        }
    } 
    dfs(0,n)
    return ans
}