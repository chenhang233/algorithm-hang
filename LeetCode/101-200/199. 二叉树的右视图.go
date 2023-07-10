/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func rightSideView(root *TreeNode) []int {
    res := make([]int, 0)
    var dfs func (*TreeNode,int)
    dfs = func (node *TreeNode,deep int) {
        if node == nil {
            return
        }
        if len(res) == deep {
            res = append(res, node.Val)
        }
        deep++
        dfs(node.Right,deep)
        dfs(node.Left,deep)
    }
    dfs(root,0)
    return res
}