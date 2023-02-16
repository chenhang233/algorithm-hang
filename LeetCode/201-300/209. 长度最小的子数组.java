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
    public int minSubArrayLen(int target, int[] nums) {
 int left = 0, right = 0,count = 0;
        int n = nums.length;
        count += nums[0];
        int res = Integer.MAX_VALUE;
           while (right < n) {
            int t =right - left + 1;
            if (count >= target) {
                res = Math.min(res,t);
                count -= nums[left++];
            } else {
                 if (right == n -1) break;
                count += nums[++right];
            }
        }
        return res == Integer.MAX_VALUE ? 0 :res;
}
}