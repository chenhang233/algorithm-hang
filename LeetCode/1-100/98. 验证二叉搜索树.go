
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func isValidBST(root *TreeNode) bool {
	return find(root, math.MinInt, math.MaxInt)
}
func find(root *TreeNode, min int, max int) bool {
	if root == nil {
		return true
	}
	if root.Val <= min || root.Val >= max {
		return false
	}
	return find(root.Left, min,root.Val) && find(root.Right, root.Val, max)
}


 func isValidBST(root *TreeNode) bool {
	var find func(*TreeNode, int, int) bool
		find = func(node *TreeNode, min int, max int) bool {
			if node == nil {
				return true
			}
			if node.Val <= min || node.Val >= max {
				return false
			}
			return find(node.Left, min, node.Val) && find(node.Right, node.Val, max)
		}
		return find(root, math.MinInt, math.MaxInt)
	}