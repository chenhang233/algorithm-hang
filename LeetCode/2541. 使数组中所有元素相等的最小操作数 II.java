class Solution {
    public  long minOperations(int[] nums1, int[] nums2, int k) {
        if (k == 0) {
            return Arrays.equals(nums1,nums2) ? 0 : -1;
        }
        long sum1 = 0,sum2 = 0;
        for (int i = 0; i < nums1.length; i++) {
            int temp = nums2[i] - nums1[i];
            if (temp % k != 0) return -1;
            if (temp > 0) {
                sum1 += temp / k;
            } else  if (temp < 0) {
                sum2 += -temp / k;
            }
        }
        return sum1 == sum2 ? sum1 : -1;
    }
}