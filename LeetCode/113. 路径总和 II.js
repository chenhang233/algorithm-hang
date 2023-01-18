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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) return []
  const result = []
  const queue = [[root, targetSum, [root.val]]]
  while (queue.length) {
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const [r, target, arr] = queue.shift()
      const nextTarget = target - r.val
      if (!r.left && !r.right && nextTarget === 0) {
        result.push(arr)
      } else {
        if (r.left) queue.push([r.left, nextTarget, [...arr, r.left.val]])
        if (r.right) queue.push([r.right, nextTarget, [...arr, r.right.val]])
      }
    }
  }
  return result
}
