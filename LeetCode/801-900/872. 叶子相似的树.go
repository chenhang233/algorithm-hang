/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func leafSimilar(root1 *TreeNode, root2 *TreeNode) bool {
	var vals1, vals2 []int
	var dfs func(*TreeNode, *[]int)
	dfs = func(node *TreeNode, vals *[]int) {
		if node == nil {
			return
		}
		if node.Left == nil && node.Right == nil {
			*vals =  append(*vals,node.Val )
		}
		dfs(node.Left, vals)
		dfs(node.Right, vals)
	}
	dfs(root1, &vals1)
	dfs(root2, &vals2)
	if len(vals1) != len(vals2) {
		return false
	}
	for i, v := range vals1 {
		if v != vals2[i] {
			return false
		}
	}
	return true
}
