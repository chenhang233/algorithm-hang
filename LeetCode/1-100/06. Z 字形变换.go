func convert(s string, numRows int) string {
	n, r := len(s), numRows
	if r == 1 || r >= n {
		return s
	}
	t := r*2 - 2
	mat := make([][]byte, r)
	x := 0
	for i, ch := range s {
		mat[x] = append(mat[x], byte(ch))
		if i%t < r-1 {
			x++
		} else {
			x--
		}
	}
	return string(bytes.Join(mat, nil))
}

func convert4(s string, numRows int) string {
	n := len(s)
	if numRows >= n || numRows == 1 {
		return s
	}
	t := numRows*2 - 2
	ans := make([]byte, 0, n)
	for i := 0; i < numRows; i++ {
		for j := 0; j+i < n; j += t {
			ans = append(ans, s[j+i])
			if i > 0 && i < numRows-1 && j+t-i < n {
				ans = append(ans, s[j+t-i])
			}
		}
	}
	return string(ans)
}
