func maxEnvelopes(envelopes [][]int) int {
	sort.Slice(envelopes, func(i, j int) bool {
		a1, a2 := envelopes[i], envelopes[j]
		return a1[0] < a2[0] || a1[0] == a2[0] && a1[1] > a2[1]
	})
	var f []int
	for _, v := range envelopes {
		h := v[1]
		if i := sort.SearchInts(f, h); i < len(f) {
			f[i] = h
		} else {
			f = append(f, h)
		}
	}
	return len(f)
}