/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func deleteMiddle(head *ListNode) *ListNode {
    if head.Next == nil {
        head = nil
        return head
    }
    n := 0
    cur := head
    for cur != nil {
        n++
        cur = cur.Next
    }
    n /= 2
    cur = head
    for cur != nil {
        if n == 1 {
            next := cur.Next.Next
            cur.Next = next
            break
        }
        cur = cur.Next
        n--
    }
    return head
}


/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func deleteMiddle(head *ListNode) *ListNode {
    if head.Next == nil {
        head = nil
        return head
    }
    fast,slow := head,head
    var prev *ListNode
    for fast != nil && fast.Next != nil {
        fast = fast.Next.Next
        prev = slow
        slow = slow.Next
    }
    prev.Next = slow.Next
    return head
}