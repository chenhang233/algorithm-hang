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
  let arr = []
  const res = []
  let h = head
  while (h) {
    arr.push(h.val)
    h = h.next
  }
  while (arr.length) {
    let max = arr[0]
    let max_i = 0
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
        max_i = i
      }
    }
    if (res.every((v) => v > max)) {
      res.push(max)
    }
    arr = arr.slice(max_i + 1)
  }
  console.log(res, 'res')
  let v2 = new ListNode()
  let virtualNode = v2
  virtualNode.next = head
  const used = []
  used.push(res.shift())
  while (virtualNode && virtualNode.next) {
    if (!used.includes(virtualNode.next.val)) {
      virtualNode.next = virtualNode.next.next
    } else {
      used.push(res.shift())
      virtualNode = virtualNode.next
    }
  }
  return v2.next
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
