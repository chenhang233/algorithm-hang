func closeStrings(word1 string, word2 string) bool {
    n1,n2 := len(word1),len(word2)
    if n1 != n2 {
        return false
    }
    m1 := make(map[byte]int)
    m2 := make(map[byte]int)
    for i:=0;i<n1;i++ {
        m1[word1[i]]++
        m2[word2[i]]++
    }
    c1 := make(map[int]int)
    for K,v := range m1 {
        _,ok := m2[K]
        if !ok {
            return false
        }
        c1[v]++
    }
    for _,v := range m2 {
        v2,ok := c1[v]
        if !ok  {
            return false
        }
        v2--
        if v2 == 0 {
        delete(c1, v)
        } else {
            c1[v] = v2
        }
    }
    return true
}
