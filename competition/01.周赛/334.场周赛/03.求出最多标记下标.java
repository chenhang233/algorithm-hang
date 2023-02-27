class Solution {
    public int maxNumOfMarkedIndices(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        int left = 0, right = n / 2 + 1;
        while (left + 1 < right) {
            int mod = (left + right) >> 1;
            if (check(nums,mod)) left = mod;
            else right = mod;
        }
        return left * 2;
    }
      public boolean check(int[] nums,int k) {
        for (int i = 0; i < k; i++) {
            if (nums[i] * 2 > nums[nums.length - k + i]) return false;
        }
        return  true;
    }
}