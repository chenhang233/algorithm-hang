class Solution {
    public int minNumber(int[] nums1, int[] nums2) {
      int min1 = nums1[0],min2 = nums2[0],min3 = Integer.MAX_VALUE;
        Set<Integer> set = new HashSet<>();
        for (int i = 0; i < nums1.length; i++) {
            int c = nums1[i];
            set.add(c);
            if (min1 > c) min1 = c;
        }
        for (int i = 0; i < nums2.length; i++) {
            int c = nums2[i];
            if (set.contains(c)) min3 = Math.min(min3,c);
            if (min2 > c) min2 = c;
        }
        if (min3 != Integer.MAX_VALUE) return min3;
        return min1 > min2 ? min1 + min2*10 : min2 + min1 * 10;
    }
}