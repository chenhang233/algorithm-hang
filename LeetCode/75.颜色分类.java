class Solution {
    public void sortColors(int[] nums) {
   for (int i = 1; i < nums.length; i++) {
            int j = i;
            int temp =  nums[i];
            while (j > 0 && temp < nums[j - 1]) {
                nums[j] = nums[j - 1];
                j--;
            }
            nums[j] = temp;
        }
    }
}