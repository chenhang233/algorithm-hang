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
    HashMap<Integer,Integer> map;
    int[] preorder;
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if (preorder.length == 0) return null;
        this.preorder  =preorder;
        map = new HashMap<>();
        for (int i = 0; i < preorder.length; i++) {
            map.put(inorder[i],i);
        }
         return build(0, preorder.length -1,0, inorder.length - 1);
    }

    public TreeNode build(int p_start,int p_end, int i_start, int i_end) {
        if (p_start > p_end) return  null;
        int rootV = preorder[p_start];
        TreeNode root = new TreeNode(rootV);
        Integer mid = map.get(rootV);
        int left = mid - i_start;
        root.left = build(p_start + 1,p_start + left,i_start,mid - 1);
        root.right = build( p_start + left + 1,p_end,mid + 1,i_end);
        return  root;
    }
}