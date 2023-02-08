/*
// Definition for a Node.
class Node {
    public int val;
    public Node prev;
    public Node next;
    public Node child;
};
*/

class Solution {
    public Node flatten(Node head) {
        if (head == null) return null;
       Node p = head;
       while (p != null) {
           Node next = p.next;
           if (p.child != null) {
               Node node = flatten(p.child);
               p.next = node;
               node.prev = p;
               while (node.next != null) {
                   node = node.next;
               }
               node.next = next;
               if (next != null) next.prev = node;
               p.child = null;
           }
           p = next;
       }
       return head;
    }
}