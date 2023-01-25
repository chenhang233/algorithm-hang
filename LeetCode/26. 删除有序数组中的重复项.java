class Solution {
    public int removeDuplicates(int[] nums) {
        int left = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i]> nums[left]) {
                nums[++left] = nums[i];
            }
        }
        return left + 1;
    }
}