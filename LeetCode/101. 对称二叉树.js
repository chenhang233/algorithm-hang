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
var isSymmetric = function (root) {
  const diff = (r1, r2) => {
    if (!r1 && !r2) {
      return true
    } else if (!r1 || !r2) {
      return false
    } else if (r1.val !== r2.val) {
      return false
    } else {
      return diff(r1.left, r2.right) && diff(r1.right, r2.left)
    }
  }
  return diff(root.left, root.right)
}
