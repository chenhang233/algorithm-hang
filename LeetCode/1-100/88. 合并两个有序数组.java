class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
 int i = m, j2 = 0;
        while (i < nums1.length) {
            nums1[i++] = nums2[j2++];
        }
        for (int k = 1; k < nums1.length; k++) {
            int temp = nums1[k];
            int j = k;
            while (j > 0 &&  temp < nums1[j - 1]) {
                nums1[j] = nums1[j - 1];
                j--;
            }
            nums1[j] = temp;
        }
    }
}