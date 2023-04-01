/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode middleNode(ListNode head) {
             ListNode fast = head,slow = head;
        while (slow.next != null && slow.next.next != null) {
            fast = fast.next;
            slow = slow.next.next;
        }
        if (slow.next != null) fast = fast.next;
        return fast;
    }
}