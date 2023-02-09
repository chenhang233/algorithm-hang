class Solution {
    public int findMiddleIndex(int[] nums) {
   int sum = 0;
        int n = nums.length;
        for (int i = 0; i < n;i++) {
            sum += nums[i];
        }
        int left_sum = 0;
        for (int i = 0; i < n; i++) {
            sum -= nums[i];
            if (sum == left_sum) {
                return i;
            }
            left_sum += nums[i];
        }
        return  -1;
    }
}