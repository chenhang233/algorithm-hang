class Solution {
  public List<Long> minOperations(int[] nums, int[] queries) {
        Arrays.sort(nums);
        int n = nums.length;
        long[] sum = new long[n + 1];
        for (int i = 0; i < n; i++) {
            sum[i + 1] = nums[i] + sum[i];
        }
        List<Long> answer = new ArrayList<>(queries.length);
        for (int q : queries) {
            int i = findPivot(nums,q); // i 是左边的边界
            long left = (long)q * i - sum[i];
            long right = sum[n] - sum[i] - (long)q * (n - i);
            answer.add(left + right);
        }
        return answer;
    }

    public int findPivot(int[] nums,int target) {
        int l = -1,r = nums.length ;
        while (l + 1 < r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] < target) {
                l = mid;
            } else {
                r = mid;
            }
        }
        return r;
    }

}