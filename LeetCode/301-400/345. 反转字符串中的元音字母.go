func reverseVowels(s string) string {
	n := len(s)
	t := []byte(s)
	left, right := 0, n-1
	for left < right {
		for left < right && s[left] != 'a' && s[left] != 'e' && s[left] != 'i' && s[left] != 'o' && s[left] != 'u' && s[left] != 'A' && s[left] != 'E' && s[left] != 'I' && s[left] != 'O' && s[left] != 'U' {
			left++
		}
		for left < right && s[right] != 'a' && s[right] != 'e' && s[right] != 'i' && s[right] != 'o' && s[right] != 'u' && s[right] != 'A' && s[right] != 'E' && s[right] != 'I' && s[right] != 'O' && s[right] != 'U' {
			right--
		}
		t[left], t[right] = t[right], t[left]
		left++
		right--
	}
	return string(t)
}