/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Left *Node
 *     Right *Node
 *     Next *Node
 * }
 */

 func connect(root *Node) *Node {
	if root == nil {
		return nil
	}
	stack := []*Node{root.Left, root.Right}
	slen := len(stack)
	for len(stack) > 0 {
		for i := 0; i < slen; i++ {
			cur := stack[i]
			if cur != nil  {
				if  i != slen-1 {
					stack[i].Next = stack[i+1]
				}
				stack = append(stack, cur.Left)
				stack = append(stack, cur.Right)
			}
		}
		stack = stack[slen:]
        slen = len(stack)
	}
	return root
}