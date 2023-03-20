/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func postorderTraversal(root *TreeNode) (res []int) {
	node := root
var stack []*TreeNode
var prev *TreeNode
for node != nil || len(stack) > 0 {
	for node != nil {
		stack = append(stack, node)
		node = node.Left
	}
	node = stack[len(stack)-1]
	stack = stack[:len(stack)-1]
	if node.Right == nil || node.Right == prev {
		res = append(res, node.Val)
		prev = node
		node = nil
	} else {
		stack = append(stack, node)
		node = node.Right
	}
}
return
}