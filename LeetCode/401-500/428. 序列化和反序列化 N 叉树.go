/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */
 type Codec struct {
}

func Constructor() *Codec {
	return &Codec{}
}

// 0-2,1-0,5-0
func (this *Codec) serialize(root *Node) string {
	if root == nil {
		return ""
	}
	var bys []byte
	dfs(root, &bys)
    return string(bys)
}

func dfs(root *Node, bys *[]byte) {
	if root == nil {
		return
	}
	*bys = append(*bys, []byte(strconv.Itoa(root.Val))...)
	*bys = append(*bys, '-')
	*bys = append(*bys, []byte(strconv.Itoa(len(root.Children)))...)
	*bys = append(*bys, ',')
	for _, child := range root.Children {
		dfs(child, bys)
	}
}

func (this *Codec) deserialize(data string) *Node {
	if data == "" {
		return nil
	}
	sp := strings.Split(data, ",")
	return process(&sp)
}

func process(list *[]string) *Node {
	cur := (*list)[0]
	*list = (*list)[1:]
	curArr := strings.Split(cur, "-")
	curVal, _ := strconv.Atoi(curArr[0])
	curChildLen, _ := strconv.Atoi(curArr[1])
	node := &Node{Val: curVal}
	var child []*Node
	for i := 0; i < curChildLen; i++ {
		n := process(list)
		if n != nil {
			child = append(child, n)
		}
	}
	node.Children = child
	return node
}


/**
 * Your Codec object will be instantiated and called as such:
 * obj := Constructor();
 * data := obj.serialize(root);
 * ans := obj.deserialize(data);
 */