function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
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
 * @param {number[]} queries
 * @return {number[][]}
 */
// 超时了
var closestNodes = function (root, queries) {
  const result = []
  let flag = false
  const inOrderTraverseNode = (callback, root) => {
    if (!root || flag) return
    inOrderTraverseNode(callback, root.left)
    callback(root.val)
    inOrderTraverseNode(callback, root.right)
  }
  for (let num of queries) {
    let min = -1
    let max = -1
    flag = false
    inOrderTraverseNode((v) => {
      if (v <= num && v > min) min = v
      if (v >= num && (max === -1 || v < max)) {
        max = v
        flag = true
      }
    }, root)
    result.push([min, max])
  }
  return result
}
// 超时
var closestNodes2 = function (root, queries) {
  const result = []
  const arr = []
  const inOrderTraverseNode = (callback, root) => {
    if (!root) return
    inOrderTraverseNode(callback, root.left)
    callback(root.val)
    inOrderTraverseNode(callback, root.right)
  }
  inOrderTraverseNode((v) => arr.push(v), root)
  const max = Array.from({ length: queries.length }, () => -1)
  const min = Array.from({ length: queries.length }, () => -1)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < queries.length; j++) {
      if (arr[i] <= queries[j] && arr[i] > min[j]) min[j] = arr[i]
      if (arr[i] >= queries[j] && (max[j] === -1 || arr[i] < max[j])) {
        max[j] = arr[i]
      }
    }
  }
  max.forEach((v, i) => result.push([min[i], v]))
  console.log(result)
  return result
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
 * @param {number[]} queries
 * @return {number[][]}
 */
var closestNodes3 = function (root, queries) {
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
const root = new TreeNode(6)
root.left = new TreeNode(2)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(4)
root.right = new TreeNode(13)
root.right.left = new TreeNode(9)
root.right.right = new TreeNode(15)
root.right.right.left = new TreeNode(14)
closestNodes3(root, [2, 5, 16])
