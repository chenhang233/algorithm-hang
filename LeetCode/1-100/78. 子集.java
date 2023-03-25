class Solution {
  ArrayList<Integer> t = new ArrayList<>();
      List<List<Integer>> res = new ArrayList<>();
    public List<List<Integer>> subsets(int[] nums) {
        dfs(0,nums);
        return res;
    }
    public void dfs(int level,int[] nums) {
        if (level == nums.length) {
            res.add(new ArrayList<>(t));
            return;
        }
        t.add(nums[level]);
        dfs(level + 1,nums);
        t.remove(t.size() - 1);
        dfs(level + 1,nums);
    }
}   