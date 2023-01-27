/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

class Solution {
    public Node connect(Node root) {
       if (root == null) return  null;
       Node cur = root;
       while (cur != null) {
           Node nextTier = new Node(0);
           Node prev = nextTier;
           while (cur != null) {
               if (cur.left != null) {
                   prev.next = cur.left;
                   prev = prev.next;
               }
               if (cur.right != null) {
                   prev.next = cur.right;
                   prev = prev.next;
               }
               cur = cur.next;
           }
           cur = nextTier.next;
       }
        return  root;
    }
}