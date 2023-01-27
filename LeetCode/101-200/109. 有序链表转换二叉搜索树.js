/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  const queue = []
  while (head) {
    queue.push(head.val)
    head = head.next
  }
  const getNode = (queue) => {
    if (!queue.length) return null
    const index = Math.floor(queue.length / 2)
    const node = new TreeNode(queue[index])
    node.left = getNode(queue.slice(0, index))
    node.right = getNode(queue.slice(index + 1))
    return node
  }
  return getNode(queue)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST2 = function (head) {
  const queue = []
  while (head) {
    const node = new TreeNode(head.val)
    queue.push(node)
    head = head.next
  }
  const g = (queue, left, right) => {
    if (left > right) return null
    const mid = Math.floor((left + right) / 2)
    queue[mid].left = g(queue, left, mid - 1)
    queue[mid].right = g(queue, mid + 1, right)
    return queue[mid]
  }

  return g(queue, 0, queue.length - 1)
}
