func decodeString(s string) string {
    var queue []string
    ptr,n := 0,len(s)
    for ptr < n  {
        cur := s[ptr]
        if cur >= '0' && cur <= '9' {
            queue = append(queue,getDigits(s, &ptr))
        } else if (cur >= 'a' && cur <= 'z') || (cur >= 'A' && cur <= 'Z') || cur == '[' {
            queue = append(queue, string(cur))
            ptr++ 
        } else {
            ptr++
            var subStr []string
            for queue[len(queue) - 1] != "[" {
                subStr  = append(subStr, queue[len(queue) - 1])
                queue = queue[:len(queue) - 1]
            }
            for i:=0;i<len(subStr) / 2;i++ {
                subStr[i],subStr[len(subStr) - 1 - i] = subStr[len(subStr) - 1 - i],subStr[i]
            }
            queue = queue[:len(queue) - 1]
            num ,_ := strconv.Atoi(queue[len(queue) - 1])
            queue = queue[:len(queue) - 1]
            queue = append(queue, strings.Repeat(getString(subStr),num))
    }
}
return  getString(queue)
}

func getDigits(s string,ptr *int) string {
    subStr := ""
    for s[*ptr]  >= '0' && s[*ptr] <= '9' {
        subStr += string(s[*ptr])
        *ptr++
    }
    return subStr
}


func getString(v []string) string {
    res := ""
    for _,s := range v {
        res += s
    }
    return res
}