/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
         ListNode h1 = headA;
        ListNode h2 = headB;
        while (h1 != null) {
            while (h2 != null) {
                if (h1 == h2) return h1;
                h2 = h2.next;
            }
            h2 = headB;
            h1 = h1.next;
        }
        return null;
    }
       public  ListNode getIntersectionNode2(ListNode headA, ListNode headB) {
        ListNode A = headA;
        ListNode B = headB;
        byte n = 0;
        while (A != null && B != null) {
            if (A == B) return A;
            A = A.next;
            B = B.next;
            if (n < 2 && A == null) {
                A = headB;
                n++;
            }
            if (n < 2 && B == null) {
                B = headA;
                n++;
            }
        }
        return null;
    }
}