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
  if (!head) {
    return head
  }
  const dark = new ListNode(0, head)
  let temp = dark
  while (temp.next && temp.next.next) {
    if (temp.next.val === temp.next.next.val) {
      const val = temp.next.val
      while (temp.next && temp.next.val === val) {
        temp.next = temp.next.next
      }
    } else {
      temp = temp.next
    }
  }
  return dark.next
}
