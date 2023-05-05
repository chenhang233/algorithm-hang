/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

 type BSTIterator struct {
	arr []int
	i   int
}

func Constructor(root *TreeNode) BSTIterator {
	bst := BSTIterator{
		i:   0,
		arr: []int{},
	}
	var build func(*TreeNode)
	build = func(r *TreeNode) {
		if r.Left != nil {
			build(r.Left)
		}
		bst.arr = append(bst.arr, r.Val)
		if r.Right != nil {
			build(r.Right)
		}
	}
	build(root)
	return bst
}

func (b *BSTIterator) Next() int {
	i := b.arr[b.i]
	b.i++
	return i
}

func (b *BSTIterator) HasNext() bool {
	if b.i < len(b.arr) {
		return true
	}
	return false
}



/**
 * Your BSTIterator object will be instantiated and called as such:
 * obj := Constructor(root);
 * param_1 := obj.Next();
 * param_2 := obj.HasNext();
 */