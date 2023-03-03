
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
      int[] inorder;
    int[] postorder;
      HashMap<Integer,Integer> map = new HashMap<>();
    int postIndex;
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        this.inorder = inorder;
        this.postorder = postorder;
        postIndex = inorder.length - 1;
        for (int i = 0; i < inorder.length; i++) {
            map.put(inorder[i],i);
        }
        return build(0, inorder.length - 1);
    }

    public TreeNode build(int left, int right) {
                System.out.println(left + "--" +right + "--" + postIndex);
        if (left > right) return null;
        int i = postorder[postIndex];
        TreeNode root = new TreeNode(i);
        Integer mid = map.get(i);
        postIndex--;
       root.right = build(mid + 1,right);
        root.left = build(left,mid - 1);
        return root;
    }
}