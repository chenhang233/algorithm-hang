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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return []
  const queue = []
  const res = []
  let flag = true
  queue.push(root)
  while (queue.length) {
    const item = []
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const q = queue.shift()
      item.push(q.val)
      q.left && queue.push(q.left)
      q.right && queue.push(q.right)
    }
    res.push(flag ? item : item.reverse())
    flag = !flag
  }
  return res
}

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return []
  const queue = []
  const res = []
  let flag = true
  queue.push(root)
  while (queue.length) {
    const item = []
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const q = queue.shift()
      if (flag) {
        item.push(q.val)
      } else {
        item.unshift(q.val)
      }
      q.left && queue.push(q.left)
      q.right && queue.push(q.right)
    }
    res.push(item)
    flag = !flag
  }
  return res
}
