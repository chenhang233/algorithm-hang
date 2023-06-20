func reverseWords(s string) string {
	sb := &strings.Builder{}
	split := strings.Split(strings.Trim(s, " "), " ")
	n := len(split)
	for i := n - 1; i >= 0; i-- {
		if len(split[i]) >0 {
			sb.WriteString(split[i])
			if i > 0 {
				sb.WriteByte(' ')
			}
		}
	}
	return sb.String()
}