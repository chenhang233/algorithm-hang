/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode detectCycle(ListNode head) {
         HashSet<ListNode> hs = new HashSet<>();
        ListNode list= head;
        while (list != null) {
            if (!hs.add(list)) {
                return list;
            }
            list = list.next;
        }
        return null;
    }
        public static ListNode detectCycle2(ListNode head) {
        ListNode slow = head, fast = head;

        while (slow != null && fast != null && fast.next != null){
            fast = fast.next.next;
            slow = slow.next;
            if(slow == fast) break;
        }
        if(fast == null || fast.next == null) return null;
        slow = head;
        while (slow != null && fast != null){
            if(slow == fast) break;
            slow = slow.next;
            fast = fast.next;
        }
        return fast;
    }
}