class Solution {
    public int[] nums, cnt;
    public int k,ans = -1;
    public int beautifulSubsets(int[] nums, int k) {
        this.k = k;
        this.nums = nums;
        this.cnt = new int[k * 2 + 1001];
        dfs(0);
        return ans;
    }
    public void dfs(int i) {
        if (i == this.nums.length) {
            ans++;
            return;
        }
        dfs(i + 1);
        int x = nums[i] + k;
        if (cnt[x - k] == 0 && cnt[x + k] == 0) {
            cnt[x]++;
            dfs(i +1);
            cnt[x]--;
        }
    }
}