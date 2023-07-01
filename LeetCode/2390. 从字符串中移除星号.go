func removeStars(s string) string {
    res := []rune{}
    for _,c := range s {
        if c == '*' {
            res = res[:len(res) - 1]
        } else {
            res = append(res,c)
        }
    }
    return string(res)
}