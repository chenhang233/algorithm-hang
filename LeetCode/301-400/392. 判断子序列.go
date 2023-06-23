func isSubsequence(s string, t string) bool {
    s1 := []byte(s)
    n1 := len(s1)
    t1 := []byte(t)
    n2 := len(t1)
    j := 0
    for i:=0;i<n1;i++ {
        temp := s1[i]
        for j < n2 && t1[j] != temp {
            j++
        }
        if j == n2 {
            return false
        }
        j++
    }
    return true
}