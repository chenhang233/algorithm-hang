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
var levelOrder = function (root) {
  const res = []
  const order = (L, R, index) => {
    if (L) {
      if (!res[index]) res[index] = []
      res[index] = [...res[index], L.val]
      order(L.left, L.right, index + 1)
    }
    if (R) {
      if (!res[index]) res[index] = []
      res[index] = [...res[index], R.val]
      order(R.left, R.right, index + 1)
    }
  }
  if (root) {
    res.push([root.val])
    order(root.left, root.right, 1)
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
var levelOrder = function (root) {
  const res = []
  if (!root) return res
  const queue = []
  queue.push(root)
  while (queue.length) {
    const item = []
    const n = queue.length
    for (let i = 1; i <= n; i++) {
      const cur = queue.shift()
      item.push(cur.val)
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
    res.push(item)
  }
  return res
}
