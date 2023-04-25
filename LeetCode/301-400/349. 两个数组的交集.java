class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
 Arrays.sort(nums1);
        Arrays.sort(nums2);
        int n1 = nums1.length,n2 = nums2.length;
        int f1 = 0,f2 = 0,index =0;
        int[] intersection = new int[n1 + n2];
        while (f1 < n1 && f2 < n2) {
            int num1 = nums1[f1],num2 = nums2[f2];
            if (num1 ==  num2) {
                if (index == 0 || intersection[index - 1] != num1) {
                    intersection[index++] = num1;
                }
                f1++;
                f2++;
            } else if (num1> num2) {
                f2++;
            } else {
                f1++;
            }
        }
        return Arrays.copyOfRange(intersection,0,index);
    }
}