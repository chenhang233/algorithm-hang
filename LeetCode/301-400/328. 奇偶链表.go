/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func oddEvenList(head *ListNode) *ListNode {
    if head == nil || head.Next == nil {
        return head
    }
    h1,h2 := ListNode{Val:0},ListNode{Val:0}
    c1,c2 := head,head.Next
    h1.Next = c1
    h2.Next = c2
    c3 := c1
    for c1 != nil && c1.Next != nil {
        c1.Next = c1.Next.Next 
        c1 = c1.Next
        if c1 != nil {
            c3 = c1
        }
        if c2.Next != nil {
        c2.Next = c2.Next.Next
        c2 = c2.Next
        } 
    }
    c3.Next = h2.Next
    return h1.Next
}


/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func oddEvenList(head *ListNode) *ListNode {
    if head == nil {
        return head
    }
    h := head.Next
    odd := head
    even := head.Next
    for even != nil && even.Next != nil {
        odd.Next = even.Next
        odd = odd.Next
        even.Next = odd.Next
        even = even.Next
    }
    odd.Next = h
    return head
}