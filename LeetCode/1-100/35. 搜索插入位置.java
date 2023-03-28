class Solution {
    public int searchInsert(int[] nums, int target) {
 int n = nums.length;
        for (int i1 = 0; i1 < nums.length; i1++) {
            if (nums[i1] >= target) return i1;
        }
        return n;
    }
        public int searchInsert(int[] nums, int target) {
    for (int i = 0; i < nums.length; i++) {
                if (nums[i] >= target) return  i;
        }
        return nums.length;
    }
}