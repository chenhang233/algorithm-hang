class Solution {
    public int minCost(int[] nums, int k) {
 int n = nums.length;
        int[] f = new int[n +1];
        byte[] b = new byte[n];
        for (int i = 0; i < n; i++) {
            int min = Integer.MAX_VALUE;
            Arrays.fill(b, (byte) 0);
            int unique = 0;
            for (int j = i; j >= 0; j--) {
                int x = nums[j];
                if (b[x] == 0) {
                    b[x] = 1;
                    unique++;
                } else if (b[x] == 1) {
                    b[x] = 2;
                    unique--;
                }
                min = Math.min(min,f[j] - unique);
            }
            f[i + 1] = k + min;
        }
        return f[n] + n;
    }
}   