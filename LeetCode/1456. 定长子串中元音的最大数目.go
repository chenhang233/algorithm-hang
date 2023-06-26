func maxVowels(s string, k int) int {
    n := len(s)
    prefix := make([]int, n + 1)
    for i:=0;i<n;i++ {
        add := 0
        if s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' {
            add++
        }
        prefix[i + 1] = prefix[i] + add
    }
   res := prefix[k -1]
   for i:= k;i<n+1;i++ {
       temp := prefix[i] - prefix[i - k]
    if temp > res {
        res = temp
    }
   }
   return res
}