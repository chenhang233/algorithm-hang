/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func isSymmetric(root *TreeNode) bool {
	return diff(root.Left, root.Right)
}

func diff(l, r *TreeNode) bool {
	if l == nil && r == nil {
		return true
	} else if l == nil || r == nil {
		return false
	} else if l.Val != r.Val {
		return false
	} else {
		return diff(l.Left, r.Right) && diff(l.Right, r.Left)
	}
}



 func isSymmetric(root *TreeNode) bool {
	var stack []*TreeNode
	l, r := root, root
	stack = append(stack, l)
	stack = append(stack, r)
	for len(stack) > 0 {
		l, r = stack[0], stack[1]
		stack = stack[2:]
		if l == nil && r == nil {
			continue
		}
		if l == nil || r == nil {
			return false
		}
		if l.Val != r.Val {
			return false
		}
		stack = append(stack, l.Left)
		stack = append(stack, r.Right)
		stack = append(stack, l.Right)
		stack = append(stack, r.Left)
	}
	return true
}