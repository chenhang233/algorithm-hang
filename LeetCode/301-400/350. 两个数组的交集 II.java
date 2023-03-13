class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
 if (nums1.length > nums2.length) intersect(nums2,nums1);
        HashMap<Integer,Integer> map = new HashMap<>();
        for (int num : nums1) {
            map.put(num,map.getOrDefault(num,0) + 1); 
        }
        int[] intersection = new int[nums1.length];
        int index= 0;
        for (int num : nums2) {
            Integer count = map.getOrDefault(num, 0);
            if (count > 0) {
                intersection[index++] = num;
                count--;
                if (count > 0) map.put(num,count);
                else map.remove(num);
            }
        }
        return  Arrays.copyOfRange(intersection,0,index);
    }
      public int[] intersect2(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        int l = 0,r = 0,index= 0;
        int len1 = nums1.length,len2 =nums2.length;
        int[] intersection = new int[Math.min(len1,len2)];
        while (l < len1 && r < len2) {
            if (nums1[l] == nums2[r]) {
                intersection[index++] = nums1[l];
                l++;
                r++;
            } else if (nums1[l] < nums2[r]) {
                l++;
            } else {
                r++;
            }
        }
        return Arrays.copyOfRange(intersection,0,index);
    }
}