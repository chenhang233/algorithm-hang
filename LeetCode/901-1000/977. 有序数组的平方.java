class Solution {
    public int[] sortedSquares(int[] nums) {
    int len = nums.length;
        int[] square = new int[len];
        for (int i = 0; i < len; i++) {
            square[i] = nums[i] * nums[i];
        }
        Arrays.sort(square);
        return square;
    }
}