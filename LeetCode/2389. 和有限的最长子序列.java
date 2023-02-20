class Solution {
    public int[] answerQueries(int[] nums, int[] queries) {
  Arrays.sort(nums);
        int len = queries.length;
        int[] res = new int[len];
        for (int i = 0; i < len; i++) {
            int target = queries[i];
            int temp = 0,count = 0;
            for (int j = 0; j < nums.length; j++) {
                int c = temp + nums[j];
                if (c <= target){
                    temp += nums[j];
                    count++;
                }
                else break;
            }
            res[i] = count;
        }
        return res;
    }

      public int[] answerQueries(int[] nums, int[] queries) {
  Arrays.sort(nums);
        int len = queries.length,n = nums.length;
        for (int i = 1; i < n; i++) {
            nums[i] = nums[i] + nums[i - 1];
        }
        int[] res = new int[len];
        for (int i = 0; i < len; i++) {
            res[i] = binarySearch(nums,queries[i]);
        }
        return res;
    }
      public int binarySearch(int[] nums, int target) {
        int left = -1, right = nums.length - 1;
        while (left < right) {
            int mid = left + (right - left + 1) / 2;              
            if (nums[mid] <= target) {
                left = mid;
            } else {
                 right = mid - 1;
            }
        }
        return left + 1;
    }
}