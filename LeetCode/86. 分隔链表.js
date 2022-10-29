/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let cur = head
  let newnode = new ListNode()
  let newnode2 = new ListNode()
  let temp = newnode
  let temp2 = newnode2
  while (cur !== null) {
    if (cur.val < x) {
      temp.next = new ListNode(cur.val)
      temp = temp.next
    } else {
      temp2.next = new ListNode(cur.val)
      temp2 = temp2.next
    }
    cur = cur.next
  }
  temp.next = newnode2.next
  return newnode.next
}
