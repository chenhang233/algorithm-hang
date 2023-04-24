class Solution {
   public int[] getSubarrayBeauty(int[] nums, int k, int x) {
        int n = nums.length;
        int Blob = 50;
        int[] map = new int[Blob * 2 + 1];
        for (int i = 0; i < k - 1; i++) {
            ++map[nums[i] + Blob];
        }
        int[] ans = new int[n - k + 1];
        for (int i = k - 1; i < n; i++) {
            ++map[nums[i] + Blob];
            int l = x;
            for (int j = 0; j < Blob; j++) {
                l -= map[j];
                if (l <= 0) {
                    ans[i - k + 1] = j - Blob;
                    break;
                }
            }
            --map[nums[i -k + 1] + Blob];
        }
        return ans;
    }
}