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
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0
  const order = (root, count) => {
    if (count > max) max = count
    if (root.left) order(root.left, count + 1)
    if (root.right) order(root.right, count + 1)
  }
  if (root) {
    order(root, 1)
  }
  return max
}
