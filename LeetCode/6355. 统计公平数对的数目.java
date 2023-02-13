class Solution {
    public  long countFairPairs(int[] nums, int lower, int upper) {
        int n = nums.length;
        long answer = 0;
        Arrays.sort(nums);
        for (int i = 0; i < n; i++) {
            int r = lowerBound(nums, i, upper - nums[i] + 1);
            int l = lowerBound(nums, i, lower - nums[i]);
            answer += r - l;
        }

        return answer;
    }
    public  int lowerBound(int[] nums,int right, int target) {
        int left = -1;
        while (left + 1 < right) {
            int mid = (left + right) >>> 1;
            if (nums[mid] < target) left = mid;
            else right = mid;
        }
        return right;
    }
}