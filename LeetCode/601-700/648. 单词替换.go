func replaceWords(dictionary []string, sentence string) string {
	rootMap := map[string]bool{}
	for _, s := range dictionary {
		rootMap[s] = true
	}
	words := strings.Split(sentence, " ")
	for i, word := range words {
		for j := 1; j <= len(word); j++ {
			if rootMap[word[:j]] {
				words[i] = word[:j]
				break
			}
		}
	}
	return strings.Join(words," ")
}