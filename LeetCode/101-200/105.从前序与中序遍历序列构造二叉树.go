/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func buildTree(preorder []int, inorder []int) *TreeNode {
	m := map[int]int{}
	for i, v := range inorder {
		m[v] = i
	}
	var build func(int, int) *TreeNode
	build = func(l int, r int) *TreeNode {
		if l > r {
			return nil
		}
		val := preorder[0]
		preorder = preorder[1:]
		
		root := &TreeNode{Val: val}
		mid := m[val]
		root.Left = build(l, mid-1)
		root.Right = build(mid+1, r)
		return root
	}
	return build(0, len(preorder)-1)
}