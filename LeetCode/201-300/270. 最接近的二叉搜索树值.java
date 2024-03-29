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
    public int closestValue(TreeNode root, double target) {
    if (root.val == target) return root.val;
        int res = root.val;
        while (root != null) {
            if (Math.abs(root.val - target) <= Math.abs(res - target)) {
                res = root.val;
            }
            if (root.val >= target) {
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return res;
    }
}