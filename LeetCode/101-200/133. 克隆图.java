/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

class Solution {
    public Node cloneGraph(Node node) {
              if (node == null) return null;
        Queue<Node> queue = new LinkedList<>();
        HashMap<Node,Node> visited = new HashMap<>();
        queue.add(node);
        Node startNode = new Node(node.val);
        visited.put(node,startNode);
        while (!queue.isEmpty()) {
            Node cur = queue.poll();
            for (Node nb : cur.neighbors) {
                if (visited.containsKey(nb)) {
                    visited.get(cur).neighbors.add(visited.get(nb));
                } else {
                    Node cpnb = new Node(nb.val);
                    visited.put(nb,cpnb);
                    visited.get(cur).neighbors.add(cpnb);
                    queue.add(nb);
                }
            }
        }
        return startNode;
    }
}