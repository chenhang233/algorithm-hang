/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func maxLevelSum(root *TreeNode) int {
    sum := []int{}
    var dfs func (*TreeNode,int)
    dfs = func (node *TreeNode, level int) {
        if level == len(sum) {
            sum = append(sum, node.Val)
        } else {
            sum[level] += node.Val
        }
        if node.Left != nil {
            dfs(node.Left,level+1)
        }
        if node.Right != nil {
            dfs(node.Right,level+1)
        }
    }
    dfs(root,0)
    res := 0
    for i,v := range sum {
        if v > sum[res] {
            res = i
        }
    }    
    return res + 1
}