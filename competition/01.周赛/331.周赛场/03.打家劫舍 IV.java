class Solution {
    public int minCapability(int[] nums, int k) {
int left = 0, right = (int) 10e9;
        while (left + 1 < right) {
            int f0 = 0, f1 = 0;
            int mid = (left + right) >>> 1;
            for (int num : nums) {
                if (num > mid) f0 = f1;
                else {
                    int t = f1;
                    f1 = Math.max(f0 + 1, f1);
                    f0 = t;
                }
            }
            if (f1 >= k) right = mid;
            else left = mid;
        }
        return right;
    }
}