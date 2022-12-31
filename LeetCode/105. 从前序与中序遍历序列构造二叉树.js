/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null
  const rootV = preorder[0]
  const root = new TreeNode(rootV)
  const mid = inorder.findIndex((v) => v === rootV)
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
  return root
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null
  const h = (p_start, p_end, i_start, i_end) => {
    if (p_start > p_end) return null
    const rootV = preorder[p_start]
    const root = new TreeNode(rootV)
    const mid = inorder.findIndex((v) => v === rootV)
    const leftTree = mid - i_start
    root.left = h(p_start + 1, p_start + leftTree, i_start, mid - 1)
    root.right = h(p_start + leftTree + 1, p_end, mid + 1, i_end)
    return root
  }
  return h(0, preorder.length - 1, 0, inorder.length - 1)
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null
  const map = new Map()
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }
  const h = (p_start, p_end, i_start, i_end) => {
    if (p_start > p_end) return null
    const rootV = preorder[p_start]
    const root = new TreeNode(rootV)
    const mid = map.get(rootV)
    const leftTree = mid - i_start
    root.left = h(p_start + 1, p_start + leftTree, i_start, mid - 1)
    root.right = h(p_start + leftTree + 1, p_end, mid + 1, i_end)
    return root
  }
  return h(0, preorder.length - 1, 0, inorder.length - 1)
}
