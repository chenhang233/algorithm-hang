/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k === 0 || !head || !head.next) return head
  let current = head
  let add = 1
  while (current.next) {
    current = current.next
    add++
  }
  let tr = add - (k % add)
  if (tr === add) return head
  current.next = head
  while (tr) {
    current = current.next
    tr--
  }
  let res = current.next
  current.next = null
  return res
}
