/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  const generate = (start, end) => {
    if (start > end) {
      return [null]
    }
    const list = []
    for (let i = start; i <= end; i++) {
      const leftNodes = generate(start, i - 1)
      const rightNodes = generate(i + 1, end)
      for (let L of leftNodes) {
        for (let R of rightNodes) {
          const root = new TreeNode(i)
          root.left = L
          root.right = R
          list.push(root)
        }
      }
    }
    return list
  }
  return generate(1, n)
}
