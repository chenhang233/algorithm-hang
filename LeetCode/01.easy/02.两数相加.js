/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
  const resultArr = []
  while (l1 || l2) {
    const v1 = l1 ? l1.val : 0
    const v2 = l2 ? l2.val : 0
    let temp = v1 + v2
    resultArr.push(temp)
    l1 ? (l1 = l1.next) : null
    l2 ? (l2 = l2.next) : null
  }

  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] > 9) {
      resultArr[i] -= 10
      if (!resultArr[i + 1]) {
        resultArr[i + 1] = 1
      } else {
        resultArr[i + 1] += 1
      }
    }
  }
  console.log(resultArr, 'resultArr')
  const nodeArr = createNode(resultArr)
  return nodeArr
  function createNode(arr) {
    if (arr.length > 0) {
      const node = new ListNode(arr[0])
      arr.shift()
      node.next = createNode(arr)
      return node
    } else {
      return null
    }
  }
}
