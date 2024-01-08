
import "strconv"
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 var paths []string
func binaryTreePaths(root *TreeNode) []string {
    paths = []string{}
    dfs(root,"")
    return paths
}

func dfs(root *TreeNode, path string) {
    if root != nil {
        path += strconv.Itoa(root.Val)
        if root.Left == nil && root.Right == nil {
            paths = append(paths, path)    
        } else {
            path += "->"
            dfs(root.Left,path)      
            dfs(root.Right,path)      
        }
    }
}