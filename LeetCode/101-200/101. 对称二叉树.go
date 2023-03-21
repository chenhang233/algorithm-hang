/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func isSymmetric(root *TreeNode) bool {
	return diff(root.Left, root.Right)
}

func diff(l, r *TreeNode) bool {
	if l == nil && r == nil {
		return true
	} else if l == nil || r == nil {
		return false
	} else if l.Val != r.Val {
		return false
	} else {
		return diff(l.Left, r.Right) && diff(l.Right, r.Left)
	}
}