/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    public Node copyRandomList(Node head) {
          if (head == null) return null;
        Node p = head,q;
        HashMap<Node,Node> map = new HashMap<>();
        while (p!= null) {
            map.put(p,new Node(p.val));
            p = p.next;
        }
        p = head;
        q = map.get(p);
        while (p != null) {
            q.next = map.get(p.next);
            q.random = map.get(p.random);
            q = q.next;
            p = p.next;
        }
        return map.get(head);
    }
}