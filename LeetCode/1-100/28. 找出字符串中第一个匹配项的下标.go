func strStr(haystack string, needle string) int {
	n, m := len(haystack), len(needle)
    if n < m {
        return -1
    }
	for i := 0; i < n; i++ {
		i2 := i
		for j := 0; j < m; j++ {
			if i2 < n && haystack[i2] == needle[j] {
				i2++
			} else {
				break
			}
		}
		if i2 - i == m {
			return i
		}
	}
	return -1
}
