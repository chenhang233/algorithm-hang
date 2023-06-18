func mergeAlternately(word1 string, word2 string) string {
    w1 :=len(word1)
    w2 := len(word2)
    index1,index2 := 0,0
    sb := strings.Builder{}

    for index1 < w1 || index2 < w2 {
        if index1 < w1 {
        sb.WriteByte(word1[index1])
        index1++
        }
        if index2 < w2 {
        sb.WriteByte(word2[index2])
        index2++
        }
    }
    return sb.String()
}
