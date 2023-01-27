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
var middleNode = function (head) {
  let num = 0
  let current = head
  let arr = []
  while (current) {
    num++
    arr.push(current.val)
    current = current.next
  }
  const middleNum =
    Math.ceil(num % 2) === 0 ? Math.ceil(num / 2) + 1 : Math.ceil(num / 2)
  arr = arr.slice(middleNum - 1)
  let myNode = null
  for (let i = 0; i < arr.length; ++i) {
    myNode = push(myNode, arr[i])
  }
  function push(head, val) {
    let prev
    let node = new ListNode(val)
    if (!head) {
      head = node
    } else {
      prev = head
      while (prev.next) {
        prev = prev.next
      }
      prev.next = node
    }
    return head
  }
  return myNode
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
var middleNode2 = function (head) {
  let A = [head]
  while (A[A.length - 1].next) {
    A.push(A[A.length - 1].next)
  }
  return A[Math.trunc(A.length / 2)]
}
