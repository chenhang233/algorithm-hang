class Solution {
    public int maxSubArray(int[] nums) {
         int prevMax = 0,max = nums[0];
        for (int num : nums) {
            prevMax = Math.max(num,prevMax + num);
            max = Math.max(max,prevMax);
        }
        return max;
    }
}