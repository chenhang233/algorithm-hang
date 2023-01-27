class Solution {
    public boolean canJump(int[] nums) {
        int n = nums.length;
        int mostRight = 0;
        for (int i = 0; i < n;++i) {
            if (i <= mostRight) {
                mostRight = Math.max(mostRight, i + nums[i]);
                if (mostRight >= n -1) {
                    return true;
                }
            }
        }
        return false;
    }
}