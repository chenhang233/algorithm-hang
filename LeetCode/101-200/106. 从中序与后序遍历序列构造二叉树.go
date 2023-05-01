/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func buildTree(inorder []int, postorder []int) *TreeNode {
	idxMap := map[int]int{}
	for i, v := range inorder {
		idxMap[v] = i
	}
	var build func(int, int) *TreeNode
	build = func(inL, inR int) *TreeNode {
		if inR < inL {
			return nil
		}
		val := postorder[len(postorder)-1]
		postorder = postorder[:len(postorder)-1]
		root := &TreeNode{Val: val}
		ini := idxMap[val]
		root.Right = build(ini+1, inR)
		root.Left = build(inL, ini-1)
		return root
	}

	return build(0, len(postorder)-1)
}