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
    public TreeNode insertIntoBST(TreeNode root, int val) {
if (root == null) return  new TreeNode(val);
        TreeNode prev = root;
        while (prev != null) {
            if (val < prev.val) {
                if (prev.left == null) {
                    prev.left = new TreeNode(val);
                    break;
                } else {
                    prev = prev.left;
                }
            } else {
                if (val > prev.val) {
                    if (prev.right == null) {
                        prev.right = new TreeNode(val);
                        break;
                    }  else {
                        prev = prev.right;
                    }
                }
            }
        }
        return root;
    }
}