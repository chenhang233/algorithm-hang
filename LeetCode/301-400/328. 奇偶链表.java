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
    public ListNode oddEvenList(ListNode head) {
  if (head == null) return null;
        if (head.next == null) return head;
        ListNode F = head;
        ListNode T = F.next;
        int firstSlowValue = T.val;
        ListNode TA = T.next,TA2 = T.next;
       while (firstSlowValue != TA.val) {
           F.next = TA;
           while (TA.next != null) {
               TA = TA.next;
           }
           TA.next = T;
           T.next = null;
           F.next = TA2;
           F = TA2;
       }
        return head;
    }
}