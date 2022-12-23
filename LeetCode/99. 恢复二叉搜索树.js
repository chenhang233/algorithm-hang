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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  const nums = []
  const order = (root, nums) => {
    if (!root) return
    order(root.left, nums)
    nums.push(root.val)
    order(root.right, nums)
  }
  const findTwoNum = (nums) => {
    let index1 = -1,
      index2 = -1
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        index2 = i + 1
        if (index1 === -1) {
          index1 = i
        }
      }
    }
    const f1 = nums[index1],
      f2 = nums[index2]
    return [f1, f2]
  }
  const swap = (root, f1, f2, count) => {
    if (root) {
      if (root.val === f1 || root.val === f2) {
        root.val = root.val === f1 ? f2 : f1
        if (--count === 0) {
          return
        }
      }
      swap(root.left, f1, f2, count)
      swap(root.right, f1, f2, count)
    }
  }
  order(root, nums)
  const [f1, f2] = findTwoNum(nums)
  swap(root, f1, f2, 2)
}
