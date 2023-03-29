class Solution {
    public void rotate(int[] nums, int k) {
      int len =nums.length;
        int[] nums2 = new int[len];
        for (int i = 0; i < len; i++) {
                   nums2[(k + i) % len] = nums[i];
        }
        for (int i = 0; i < len; i++) {
            nums[i] = nums2[i];
        }
    }
}