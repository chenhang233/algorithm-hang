class Solution {
   boolean[] used;
    List<List<Integer>> an2 = new ArrayList<>();

    public List<List<Integer>> permute(int[] nums) {
        int n = nums.length;
        used = new boolean[n];
        dfs2(nums,new ArrayList<>(),n);
        return an2;
    }
    public void dfs2(int[] nums,List<Integer> cur, int k) {
        if (cur.size() == k) {
            an2.add(new ArrayList<>(cur));
            return;
        }
        for (int i = 0; i < k; i++) {
            if (used[i]) continue;
            used[i] = true;
            cur.add(nums[i]);
            dfs2(nums,cur,k);
            cur.remove(cur.size() - 1);
            used[i] = false;
        }
    }
}