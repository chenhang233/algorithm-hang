class Solution {
   public int[] searchRange(int[] nums, int target) {
        int left = binarySearch(nums,target,true);
        int right = binarySearch(nums,target,false) - 1;
        int[] ans = new int[]{-1,-1};
        if (nums.length == 0) return ans;
        if (left <= right && nums[left] == target && nums[right] == target) {
            ans[0]  =left;
            ans[1] = right;
        }
        return ans;
    }

    public int binarySearch(int[] nums,int target, boolean flagL) {
        int l = 0,r = nums.length - 1,an = nums.length;
        while (l <= r) {
            int mid = l +(r - l)/2;
            if (nums[mid] > target || (flagL && nums[mid] >= target)) {
                r = mid - 1;
                an = mid;
            } else {
                l = mid + 1;
            }
        }
        return an;
    }
}