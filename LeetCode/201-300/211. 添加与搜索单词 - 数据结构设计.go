
type tireNode struct {
	child [26]*tireNode
	isEnd bool
}

func (t *tireNode) insert(word string) {
	n := len(word)
	cur := t
	for i := 0; i < n; i++ {
		c := word[i] - 'a'
		if cur.child[c] == nil {
			cur.child[c] = &tireNode{}
		}
		cur = cur.child[c]
	}
	cur.isEnd = true
}

type WordDictionary struct {
	root *tireNode
}

func Constructor() WordDictionary {
	return WordDictionary{root: &tireNode{}}
}

func (this *WordDictionary) AddWord(word string) {
	this.root.insert(word)
}

func (this *WordDictionary) Search(word string) bool {
	var dfs func(int, *tireNode) bool
	len := len(word)
	dfs = func(i int, root *tireNode) bool {
		if i == len {
			return root.isEnd
		}
		w := word[i]
		if w == '.' {
			for index := range root.child {
				child := root.child[index]
				if child != nil && dfs(i+1, child) {
					return true
				}
			}
		} else {
			child := root.child[w-'a']
			if child != nil && dfs(i+1, child) {
				return true
			}
		}
		return false
	}
	return dfs(0, this.root)
}


/**
 * Your WordDictionary object will be instantiated and called as such:
 * obj := Constructor();
 * obj.AddWord(word);
 * param_2 := obj.Search(word);
 */