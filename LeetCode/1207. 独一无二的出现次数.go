func uniqueOccurrences(arr []int) bool {
    m := make(map[int]int)
    for _,v := range arr {
        _,ok := m[v]
        if ok {
            m[v]++
        } else {
            m[v] = 1
        }
    }
    m2 := make(map[int]struct{})
    for _,v := range m {
        _,ok := m2[v]
        if ok {
            return false
        } 
        m2[v] = struct{}{}
    }
    return true
}