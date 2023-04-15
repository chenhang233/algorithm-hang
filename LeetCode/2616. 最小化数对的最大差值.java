class Solution {
    public int minimizeMax(int[] nums, int p) {
          Arrays.sort(nums);
        int n = nums.length,left = -1,right = nums[n - 1] - nums[0];
        while (left +1 < right) {
            int mid = (left + right) >>> 1, count = 0;
            for (int i = 0; i < n - 1; i++) {
                if (nums[i +1] - nums[i] <= mid) {
                    count++;
                    i++;
                }
            }
            if (count >= p) {
                right = mid;
            } else {
                left = mid;
            }
        }
        return right;
    }
}