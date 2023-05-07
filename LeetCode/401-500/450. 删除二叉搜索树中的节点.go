/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func deleteNode(root *TreeNode, key int) *TreeNode {
	if root == nil {
		return nil
	} else if root.Val > key {
		root.Left = deleteNode(root.Left, key)
	} else if root.Val < key {
		root.Right = deleteNode(root.Right, key)
	} else if root.Left == nil || root.Right == nil {
		if root.Left == nil {
			return root.Right
		}
		return root.Left
	} else {
		rl := root.Right
		for rl.Left != nil {
			rl = rl.Left
		}
		rl.Right = deleteNode(root.Right, rl.Val)
		rl.Left = root.Left
		return rl
	}
	return root
}