func shortestDistance(wordsDict []string, word1 string, word2 string) int {
    ans := len(wordsDict)
    i1,i2 := -1,-1
    for i,word := range wordsDict {
        if word == word1 {
            i1 = i
        } else if word == word2 {
            i2 = i
        }
        if i1 > -1 && i2 > -1 {
            ans = min(ans,abs(i2 - i1))
        }
    }
    return ans
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}

func min(a, b int) int {
    if a > b {
        return b
    }
    return a
}
