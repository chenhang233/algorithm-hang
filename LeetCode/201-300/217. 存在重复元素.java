class Solution {
    public boolean containsDuplicate(int[] nums) {
    HashMap<Integer,Boolean> map = new HashMap<>();
        boolean flag = false;
        for (int num : nums) {
            if (map.containsKey(num)) {
                flag = true;
                break;
            }
            map.put(num,true);
        }
        return flag;
    }
}