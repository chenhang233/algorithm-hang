/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let virtual = new ListNode()
  virtual.next = head
  let prev = virtual
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next
  }
  let next = prev
  for (let i = 0; i < right - left + 1; i++) {
    next = next.next
  }
  let changeNode = prev.next
  let nextNode = next.next
  prev.next = null
  next.next = null
  let a = changeNode
  let b = null
  while (a) {
    const n = a.next
    a.next = b
    b = a
    a = n
  }
  prev.next = b
  changeNode.next = nextNode
  return virtual.next
}
