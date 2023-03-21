/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func levelOrder(root *TreeNode) [][]int {
	var list []*TreeNode
	var res [][]int
	list = append(list, root)
	count := 0
	for len(list) > 0 {
		n := len(list)
		res = append(res, []int{})
		for i := 0; i < n; i++ {
			node := list[i]
			if node == nil {
				fmt.Println("nil", node, count, res)
				return nil
			}
			res[count] = append(res[count], node.Val)
			if node.Left != nil {
				list = append(list, node.Left)
			}
			if node.Right != nil {
				list = append(list, node.Right)
			}
		}
		count++
		list = list[n:]
	}
	return res
}