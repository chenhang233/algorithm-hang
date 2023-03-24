/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func findTarget(root *TreeNode, k int) bool {
	fmp := map[int]bool{}
	var dfs func(node *TreeNode) bool
	dfs = func(node *TreeNode) bool {
		if node == nil {
			return false
		}
		if b := fmp[k-node.Val]; b {
			return b
		}
		fmp[node.Val] = true
		return dfs(node.Left) || dfs(node.Right)
	}
	return dfs(root)
}