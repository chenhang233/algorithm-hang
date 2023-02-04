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
    public ListNode removeElements(ListNode head, int val) {
  ListNode prev = null;
        ListNode p = head;
        while (p != null) {
            if (p.val == val) {
                if (prev != null) {
                    prev.next = p.next;
                    p = p.next;
                }
                else {
                    head = head.next;
                    p = head;
                }
            } else {
                prev = p;
                p = p.next;
            }
        }
        return head;
    }
      public ListNode removeElements(ListNode head, int val) {
        if (head == null) return null;
        head.next = removeElements(head.next,val);
        return head.val == val ? head.next : head;
    }
     public ListNode removeElements3(ListNode head, int val) {
        ListNode node = new ListNode(-1);
        ListNode newNode = node;
        newNode.next = head;
        while (newNode.next != null) {
            if (newNode.next.val == val) {
                newNode.next = newNode.next.next;
            } else {
                newNode = newNode.next;
            }
        }
        return  node.next;
    }
}