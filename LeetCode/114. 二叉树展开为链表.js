/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const linkedList = new TreeNode(0)
  let curLinked = linkedList
  const order = (r) => {
    if (r == null) return
    curLinked.right = new TreeNode(r.val)
    curLinked = curLinked.right
    order(r.left)
    order(r.right)
  }
  order(root)
  curLinked = linkedList.right
  let root2 = root
  while (curLinked) {
    root2.val = curLinked.val
    if (curLinked.right) {
      root2.left = null
      root2.right = new TreeNode()
    }
    root2 = root2.right
    curLinked = curLinked.right
  }
}
