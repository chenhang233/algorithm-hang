class Solution {
    public int[] leftRigthDifference(int[] nums) {
               int n = nums.length;
            int[] left = new int[n];
            int[] right = new int[n];
            int[] answer = new int[n];
        left[0] = 0;
        right[n - 1] = 0;
        for (int i = 1,j = n - 2; i < n; i++,j--) {
            left[i] = left[i - 1] + nums[i - 1];
            right[j] = right[j + 1] + nums[j + 1];
        }
        for (int i = 0; i < n; i++) {
            answer[i] = Math.abs(left[i] - right[i]);
        }
        return answer;
    }
}