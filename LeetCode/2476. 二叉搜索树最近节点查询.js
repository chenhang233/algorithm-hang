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
 * @param {number[]} queries
 * @return {number[][]}
 */
var closestNodes = function (root, queries) {
  const findArr = []
  const res = []
  const findTree = (root) => {
    if (root.left) findTree(root.left)
    findArr.push(root.val)
    if (root.right) findTree(root.right)
  }
  findTree(root)
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i]
    let left = 0
    let right = findArr.length - 1
    let flag = true
    const item = [-1, -1]
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (findArr[mid] === query) {
        item[0] = findArr[mid]
        item[1] = findArr[mid]
        flag = false
        break
      } else if (findArr[mid] > query) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    if (flag) {
      item[0] = findArr[left - 1] ?? -1
      item[1] = findArr[left] ?? -1
    }
    res.push(item)
  }
  return res
}
