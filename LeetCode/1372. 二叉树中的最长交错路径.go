/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func longestZigZag(root *TreeNode) int {
    if root == nil {
        return 0
    }
    return MAX(dfs(root.Left,1,true),dfs(root.Right,1,false)) -1
}

func dfs(node *TreeNode,num int,flag bool) int {
    if node == nil {
        return num
    }
    if flag {
        return MAX(dfs(node.Left,1,true),dfs(node.Right,num + 1,false))
    } else {
        return MAX(dfs(node.Left,num + 1,true),dfs(node.Right,1,false))
    }
}

func MAX(a,b int) int {
    if a > b {
        return a
    }
    return b
}