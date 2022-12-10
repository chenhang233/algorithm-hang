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
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
var generateTrees = function (n) {
  const res = []
  const generate = (node, i, usedMap, len) => {
    console.log(node, 'node', usedMap, 'usedMap', i, 'i')
    if (len === n) {
      //   res.push(node)
      return
    }
    if (i - 1) {
      for (let j = 1; j <= i - 1; i++) {
        if (usedMap[j]) break
        node.left = new TreeNode(j)
        usedMap[j] = true
        len++
        generate(node.left, j, usedMap, len)
      }
    }
    if (i < n) {
      for (let j = i + 1; j <= n; j++) {
        if (usedMap[j]) break
        node.right = new TreeNode(j)
        usedMap[j] = true
        len++
        generate(node.right, j, usedMap, len)
      }
    }
  }
  //   for (let i = 1; i <= n; i++) {
  const node = new TreeNode(1)
  generate(node, 1, { 1: true }, 1)
  //   }
  console.log(node)
}

generateTrees(3)
