/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let current = head
  while (current && current.next) {
    let tempVal = current.val
    let tempNextVal = current.next.val
    while (current.next && tempVal === tempNextVal) {
      current.next = current.next.next
      tempNextVal = current.next && current.next.val
    }
    current = current.next
  }
  return head
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates2 = function (head) {
  if (!head) return head
  let current = head
  while (current.next) {
    if (current.next.val === current.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return head
}
