class Solution {
    public long beautifulSubarrays(int[] nums) {
 	int[] s = new int[nums.length + 1];
        for (int i = 0; i < nums.length; i++) {
            s[i + 1] = s[i] ^ nums[i];
        }
        HashMap<Integer,Integer> map = new HashMap<>();
        long ans = 0;
        for (int i : s) {
            ans += map.getOrDefault(i,0);
            map.merge(i,1,Integer::sum);
        }
        return ans;
    }
})
