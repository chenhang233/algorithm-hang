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
    public ListNode reverseList(ListNode head) {
   ListNode p = head;
        ListNode prev = null;
        while (p != null) {
            ListNode cur = p.next;
            p.next = prev;
            prev = p;
            p = cur;
        }
        return prev;
    }
}