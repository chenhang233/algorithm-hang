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
var removeNodes = function (head) {
  const stack = []
  let h = head
  while (h) {
    while (stack.length && stack[stack.length - 1] < h.val) {
      stack.pop()
    }
    stack.push(h.val)
    h = h.next
  }
  let h2 = new ListNode()
  let h3 = h2
  for (let i = 0; i < stack.length; i++) {
    h3.next = new ListNode(stack[i])
    h3 = h3.next
  }
  return h2.next
}
