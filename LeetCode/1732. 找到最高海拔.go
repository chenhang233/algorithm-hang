
func largestAltitude(gain []int) int {
    res,cur,n := 0,0,len(gain)
    for i:=0;i<n;i++ {
        cur += gain[i]
        if cur > res {
            res = cur
        }
    }
    return res
}