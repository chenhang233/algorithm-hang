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
        public TreeNode sortedArrayToBST(int[] nums) {
         return   help(nums, 0, nums.length -1);
        }
         public  TreeNode help(int[] nums, int left, int right) {
            if (left > right) return null;
            int index = (left + right) / 2;
            TreeNode node = new TreeNode(nums[index]);
            node.left = help(nums, left, index - 1);
            node.right = help(nums, index + 1,right);
            return  node;
    }
    }