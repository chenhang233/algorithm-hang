
func findSubstring(s string, words []string) []int {
	m, n := len(words), len(words[0])
	r := len(s)
	wordsMap := make(map[string]int)
	var ans []int
	for i := 0; i < r-(m*n-1); i++ {
		for w1, _ := range wordsMap {
			wordsMap[w1] = 0
		}
		for _, word := range words {
			wordsMap[word]++
		}
		f1 := true
		for j := i; j < i+m*n; j += n {
			tempStr := s[j : j+n]
			num, ok := wordsMap[tempStr]
			if !ok || num == 0 {
				f1 = false
				break
			}
			wordsMap[tempStr]--
		}
		if f1 {
			ans = append(ans, i)
		}
	}
	return ans
}