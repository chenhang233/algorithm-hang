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
    int sumPath = Integer.MIN_VALUE;

    public int maxPathSum(TreeNode root) {
        getPathGain(root);
        return sumPath;
    }

    public int getPathGain(TreeNode root) {
        if (root == null) return 0;
        int l = Math.max(getPathGain(root.left), 0);
        int r = Math.max(getPathGain(root.right), 0);
        int sum = l + r + root.val;
        if (sum > sumPath) sumPath = sum;
        return Math.max(l,r) + root.val;
    }
}