/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let arrList = lists.map((list) => getArr(list, []))
  function getArr(list, arr) {
    if (list) {
      arr = [...arr, list.val]
      return getArr(list.next, arr)
    }
    return arr
  }
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
  function myPush(value, list) {
    const node = new ListNode(value, null)
    if (!list) {
      list = node
    } else {
      let current = list
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    return list
  }
  let myList = null
  arrList = arrList.flat().sort((a, b) => a - b)
  arrList.forEach((v) => (myList = myPush(v, myList)))
  return myList
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists2 = function (lists) {
  const len = lists.length
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]
  let myList = null
  for (let i = 0; i < len; ++i) {
    myList = mergeList(myList, lists[i])
  }
  function mergeList(L1, L2) {
    const node = new ListNode()
    let current = node
    while (L1 && L2) {
      if (L1.val < L2.val) {
        current.next = L1
        L1 = L1.next
      } else {
        current.next = L2
        L2 = L2.next
      }
      current = current.next
    }
    if (L1) current.next = L1
    if (L2) current.next = L2
    return node.next
  }
  console.log(myList, 'myList')
  return myList
}
