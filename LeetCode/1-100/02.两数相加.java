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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
  ListNode p = new ListNode(0);
            ListNode cur = p;
            int over = 0;
            while (l1 != null || l2 != null || over > 0) {
                int x = l1 == null ? 0 :l1.val;
                int y = l2 == null ? 0 :l2.val;
                int sum = x+ y + over;
                over = sum / 10;
                cur.next = new ListNode(sum % 10);
                cur = cur.next;
                if (l1 != null) l1 = l1.next;
                if (l2 != null) l2 = l2.next;
            }
            return p.next;
    }
}