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
 public boolean isSymmetric(TreeNode root) {
        return diff(root.left,root.right);
    }
    public boolean diff(TreeNode l,TreeNode r) {
        if (l == null && r == null) {
            return true;
        } else if (l == null || r == null) {
            return false;
        } else if (l.val != r.val) {
            return false;
        } else {
            return diff(l.right,r.left) && diff(l.left,r.right);
        }
    }
}