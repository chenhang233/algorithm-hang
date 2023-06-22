func compress(chars []byte) int {
	write,left,n := 0,0,len(chars)
	for read,ch := range chars {
		if read == n - 1 || chars[read +1] != ch {
			chars[write] = ch
			write++
			num := read - left + 1
			if num > 1 {
			  start := write
				for ;num>0;num/=10 {
					chars[write] ='0' + byte(num%10)
					write++
				}
				s := chars[start:write]
				l := len(s)
				for c:=0 ;c< l/ 2;c++ {
				  s[c],s[l-c-1] = s[l-c-1],s[c]
				}
			}
		  left = read +1
		}
	}
	return write
  }