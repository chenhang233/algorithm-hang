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
var minDepth = function (root) {
  let deep = 0
  if (!root) return deep
  const queue = [root]
  while (queue.length) {
    const n = queue.length
    deep++
    for (let i = 0; i < n; i++) {
      const r = queue.shift()
      if (!r.left && !r.right) {
        return deep
      } else {
        r.left && queue.push(r.left)
        r.right && queue.push(r.right)
      }
    }
  }
}
