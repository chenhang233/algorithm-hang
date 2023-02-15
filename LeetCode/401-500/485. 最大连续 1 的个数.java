class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
 int result = 0;
        int n = nums.length;
        boolean flag = false;
        int temp = 0;
        for (int i = 0; i < n; i++) {
            if (nums[i] == 1) {
                if (!flag) flag = true;
                temp += 1;
                if (temp > result) result = temp;
            } else {
                temp = 0;
                flag = false;
            }
        }
        return  result;
    }
}