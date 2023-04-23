class Solution {
    public int[] getSubarrayBeauty(int[] nums, int k, int x) {
        int n = nums.length,j = n - k + 1;
        int[] res = new int[j];
        for (int i = 0; i < j; i++) {
            int minX = findMinX(nums, x, k, i, i + k - 1);
            res[i] = minX;
        }
        return res;
    }

    public int findMinX(int[] nums, int x, int k, int l, int r) {
        int[] start = new int[k];
        for (int i = l; i <= r; i++) {
            start[i % k] = nums[i];
        }
        Arrays.sort(start);
        return Math.min(start[x - 1], 0);
    }
}