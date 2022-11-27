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
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
var removeNodes = function (head) {
  if (!head) {
    return head
  }
  const dark = new ListNode(0, head)
  let temp = dark
  while (temp.next && temp.next.next) {
    if (temp.next.val < temp.next.next.val) {
      let val = temp.next.next.val
      let temp2 = head
      temp.next = temp.next.next
    } else {
      temp = temp.next
    }
  }
  return dark.next
}
// [5,2,13,3,8]
const root = new ListNode(5)
root.next = new ListNode(2)
root.next.next = new ListNode(13)
root.next.next.next = new ListNode(3)
root.next.next.next.next = new ListNode(8)

console.log(removeNodes(root))
