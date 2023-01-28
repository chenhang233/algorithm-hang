class Solution {
    public int minSubArrayLen(int target, int[] nums) {
   int slow = 0,fast = 0;
        int minLen = Integer.MAX_VALUE;
        int temp = 0;
        for (int i = 0; i < nums.length; i++) {
            temp += nums[i];
            fast++;
            while (temp >= target) {
                if (fast - slow < minLen) minLen = fast - slow;
                temp -= nums[slow];
                slow++;
            }
        }
        return minLen == Integer.MAX_VALUE ? 0 : minLen;
    }
}