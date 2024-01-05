class Solution {
    public int jump(int[] nums) {
        int maxPosition = 0,end = 0,step = 0;
        for (int i = 0;i < nums.length - 1;i++) {
            maxPosition = Math.max(maxPosition, i + nums[i]);
            if (i == end) {
                end = maxPosition;
                step++;
            }
        } 
        return step;
    }
}