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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let temp = 0
  let flag = true
  let start = false
  const Ftree = (root) => {
    if (!flag) return
    if (root.left) Ftree(root.left)
    if (root.val <= temp && start) {
      flag = false
    } else {
      temp = root.val
    }
    start = true
    if (root.right) Ftree(root.right)
  }
  Ftree(root)
  return flag
}
