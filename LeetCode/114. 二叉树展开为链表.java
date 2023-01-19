/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public void flatten(TreeNode root) {
        ArrayList<TreeNode> list = new ArrayList<>();
        orderList(root,list);
        int n = list.size();
        for (int i = 1; i < n; i++) {
            TreeNode prev = list.get(i - 1), cur = list.get(i);
            prev.left = null;
            prev.right = cur;
        }
    }

    public void orderList(TreeNode root, ArrayList<TreeNode> list) {
        if (root == null) return ;
        list.add(root);
        orderList(root.left,list);
        orderList(root.right,list);
    }
}