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
}