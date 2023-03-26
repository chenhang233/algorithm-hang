class Solution {
    public int findSmallestInteger(int[] nums, int m) {
  HashMap<Integer, Integer> cnt = new HashMap<>();
        for (int x : nums) {
            cnt.merge((x % m + m) % m, 1, Integer::sum);
        }
        int mex = 0;
        while (cnt.merge(mex % m, -1, Integer::sum) >= 0) {
            ++mex;
        }
        return mex;
    }
}