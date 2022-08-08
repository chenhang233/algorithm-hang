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
