/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func reverseList(head *ListNode) *ListNode {
	p := head
	var prev *ListNode
	for p != nil {
		next := p.Next
		p.Next = prev
		prev = p
		p = next
	}
	return prev
}