func gcdOfStrings(str1 string, str2 string) string {
    n1 := len(str1)
    n2 := len(str2)    
    if str1+str2 != str2+str1 {
        return ""
    }
    return str1[:gcd(n1,n2)]
}

func gcd(a,b int) int {
	for a != 0 {
		t := a
		a = b%a
		b = t
	}
	return b
}