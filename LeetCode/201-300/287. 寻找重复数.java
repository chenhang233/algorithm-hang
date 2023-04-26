class Solution {
    public int findDuplicate(int[] nums) {
   int ans = 0,l = 0,r = nums.length - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            int count = 0;
            for (int num : nums) {
                if (num <= mid) count++;
            }
            if (count <= mid) {
                l = mid + 1;
            } else {
                r = mid - 1;
                ans = mid;
            }
        }
        return ans;
    }
}   