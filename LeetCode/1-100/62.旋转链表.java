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
    public ListNode rotateRight(ListNode head, int k) {
  if (head == null || head.next == null || k == 0) return head;
        ListNode p = head;
        int len =  1;
        while (p.next != null) {
            p = p.next;
            len++;
        }
        int res = len - k % len;
        if (res == len) return head;
        p.next = head;
        while (res != 0) {
            res--;
            p = p.next;
        }
        head = p.next;
        p.next = null;
        return head;
    }
}