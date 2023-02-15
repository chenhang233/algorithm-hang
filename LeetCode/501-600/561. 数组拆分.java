class Solution {
    public int arrayPairSum(int[] nums) {
   Arrays.sort(nums);
        int n = nums.length;
        int res = 0;
        for (int i = 0,j = 1; i < n;) {
            res += Math.min(nums[i],nums[j]);
            i =j +1;
            j = i + 1;
        }
        return res;
    }
    public int arrayPairSum(int[] nums) {
   Arrays.sort(nums);
        int n = nums.length;
        int res = 0;
        for (int i = 0; i < n;) {
            res += nums[i];
            i += 2;
        }
        return res;
}
}