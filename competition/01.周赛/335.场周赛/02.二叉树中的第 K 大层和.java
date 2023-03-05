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
    public long kthLargestLevelSum(TreeNode root, int k) {
//        PriorityQueue<Long> p = new PriorityQueue<>((o1, o2) -> o2.intValue() - o1.intValue());
        ArrayList<Long> l = new ArrayList<>();
        ArrayList<TreeNode> list = new ArrayList<>();
        list.add(root);
        while (list.size() != 0) {
            int len = list.size();
            long size = 0;
            for (int i = 0; i < len; i++) {
                TreeNode t = list.remove(0);
                size += t.val;
                if (t.left != null) list.add(t.left);
                if (t.right != null) list.add(t.right);
            }

            l.add(size);
//            p.offer(size);
        }
        long res = 0;
//        System.out.println(Arrays.toString(p.toArray()));
         l.sort(new Comparator<Long>() {
            @Override
            public int compare(Long o1, Long o2) {
                if (o1 > o2) {
                    return -1;
                } else if (o2 > o1) {
                    return 1;
                }
                return 0;
            }
        });
        System.out.println(l);
        if (l.size() < k) return -1;
        return l.get(k - 1);
    }
}