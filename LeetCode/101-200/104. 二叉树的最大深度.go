/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func maxDepth(root *TreeNode) int {
	return dfs(0, root)
}

func dfs(i int,root *TreeNode) int {
	if root == nil {
		return i
	}
	left :=  dfs(i +1,root.Left)
	right := dfs(i + 1,root.Right)
	return int(math.Max(float64(left), float64(right)))
}


/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func maxDepth(root *TreeNode) int {
	return dfs(0, root)
}

func dfs(i int,root *TreeNode) int {
	if root == nil {
		return i
	}
	l := dfs(i+1,root.Left)
	r := dfs(i+1,root.Right)
	return Max(l, r)
}

func Max(a,b int) int {
	if a > b {
		return a
	}
	return b
}