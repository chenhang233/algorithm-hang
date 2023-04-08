class Solution {
   int sum = 0;
    public int findTargetSumWays(int[] nums, int target) {
        backtrack(nums,target,0,0);
        return sum;
    }
    public void backtrack(int[] nums,int target ,int index, int cur) {
        if (index == nums.length) {
            if (target == cur) sum++;
        } else {
            backtrack(nums,target, index + 1, cur + nums[index]);
            backtrack(nums,target, index + 1, cur - nums[index]);
        }
    }
}