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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false
  const find = (root, cur) => {
    cur += root.val
    if (cur === targetSum && !root.left && !root.right) return true
    if (root.left && find(root.left, cur)) return true
    if (root.right && find(root.right, cur)) return true
    return false
  }

  return find(root, 0)
}
