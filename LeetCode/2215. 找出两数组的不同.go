func findDifference(nums1 []int, nums2 []int) [][]int {
    n1,n2 := len(nums1),len(nums2)
    m1 := make(map[int]bool)
    m2 := make(map[int]bool)
    for i:=0;i<n1;i++ {
        m1[nums1[i]] = true
    }
    for i:=0;i<n2;i++ {
        m2[nums2[i]] = true
    }
    res := make([][]int, 2)
    for k,_ := range m1 {
        if !m2[k] {
           res[0] = append(res[0], k) 
        }
    }
     for k,_ := range m2 {
        if !m1[k] {
           res[1] = append(res[1], k) 
        }
    }
    return res
}