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
var levelOrderBottom = function (root) {
  const stack = []
  const generate = (root, index) => {
    if (root) {
      const v = stack[index]
      if (v) {
        stack[index].push(root.val)
      } else {
        stack[index] = [root.val]
      }
      generate(root.left, index + 1)
      generate(root.right, index + 1)
    }
  }
  generate(root, 0)
  return stack.reverse()
}
