class Solution {
    public void moveZeroes(int[] nums) {
 int left = 0,right = 1;
        A: for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0 && right < nums.length) {
                while (right < nums.length && nums[right] == 0 ) {
                    if (++right == nums.length) break A;
                };
                nums[left++] = nums[right];
                nums[right++] = 0;
                if (right == nums.length) break;
            } else  {
                left++;
                right++;
            }
        }
    }
}