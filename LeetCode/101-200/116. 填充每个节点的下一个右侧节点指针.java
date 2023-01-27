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
       if (root == null) return null;
        ArrayList<Node> list = new ArrayList<>();
        list.add(root);
        while (list.size() > 0) {
            int len = list.size();
            for (int i = 0; i < len; i++) {
                Node curNode = list.remove(0);
                curNode.next = i == len - 1 ? null : list.get(0);
                if (curNode.left != null) list.add(curNode.left);
                if (curNode.right != null) list.add(curNode.right);
            }
        }
        return  root;  
    }
}