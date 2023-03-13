class Solution {
    public int maxScore(int[] nums) {
 Arrays.sort(nums);
        long prev =0;
        int sum = 0;
        for (int i = nums.length - 1; i >= 0; i--) {
            prev += nums[i];
            if (prev > 0) sum++;
            else break;
        }
        return sum;
    }
}