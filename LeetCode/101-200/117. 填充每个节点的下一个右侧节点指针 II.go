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
	cur := root
	for cur != nil {
		node := &Node{Val: 0}
		prev := node
		for cur != nil {
			if cur.Left != nil {
				prev.Next = cur.Left
				prev = prev.Next
			}
			if cur.Right != nil {
				prev.Next = cur.Right
				prev = prev.Next
			}
			cur = cur.Next
		}
		cur = node.Next
	}
	return root

}