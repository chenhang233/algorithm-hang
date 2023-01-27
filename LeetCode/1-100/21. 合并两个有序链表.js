/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
  const arr = []
  const getValue = (list) => {
    while (list) {
      arr.push(list.val)
      list = list.next
    }
  }
  getValue(list1)
  getValue(list2)
  arr.sort((a, b) => a - b)
  let myList = null
  const pushNode = (val) => {
    const node = new ListNode(val)
    let current
    if (myList === null) {
      myList = node
    } else {
      current = myList
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
  }
  arr.forEach((v) => pushNode(v))
  console.log(myList, 'my')
  return myList
}

/**
 * 递归
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists2 = function (list1, list2) {
  if (list1 === null) {
    return list2
  } else if (list2 === null) {
    return list1
  } else if (list1.val < list2.val) {
    list1.next = mergeTwoLists2(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists2(list1, list2.next)
    return list2
  }
}
