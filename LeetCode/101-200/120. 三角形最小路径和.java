class Solution {
    public int minimumTotal(List<List<Integer>> triangle) {
         int n = triangle.size();
        int[][] dp = new int[n][n];
        dp[0][0] = triangle.get(0).get(0);
        for (int i = 1; i < n; i++) {
            dp[i][0] = triangle.get(i).get(0) + dp[i -1][0];
            for (int j = 1; j < i; j++) {
                dp[i][j] = triangle.get(i).get(j) + Math.min(dp[i -1][j -1],dp[i - 1][j]);
            }
            dp[i][i] = triangle.get(i).get(i) + dp[i - 1][i - 1];
        }
        int min = dp[n - 1][0];
        for (int i = 1; i < n; i++) {
            min = Math.min(min, dp[n -1][i]);
        }
        return min;
    }
        public int minimumTotal2(List<List<Integer>> triangle) {
        int n = triangle.size();
        int[][] dp = new int[2][n];
        dp[0][0] = triangle.get(0).get(0);
        for (int i = 1; i < n; i++) {
            int cur = i % 2;
            int prev = 1 - cur;
            dp[cur][0] = triangle.get(i).get(0) + dp[prev][0];
            for (int j = 1; j < i; j++) {
                dp[cur][j] = triangle.get(i).get(j) + Math.min(dp[prev][j -1],dp[prev][j]);
            }
            dp[cur][i] = triangle.get(i).get(i) + dp[prev][i - 1];
        }
        int min = dp[(n - 1) % 2][0];
        for (int i = 1; i < n; i++) {
            min = Math.min(min, dp[(n -1) % 2][i]);
        }
        return min;
    }
    public int minimumTotal3(List<List<Integer>> triangle) {
  int n = triangle.size();
        int[] f = new int[n];
        f[0] = triangle.get(0).get(0);
        for (int i = 1; i < n; i++) {
            f[i] = f[i -1] + triangle.get(i).get(i);
            for (int j = i - 1; j > 0; j--) {
                f[j] = Math.min(f[j - 1], f[j]) + triangle.get(i).get(j);
            }
            f[0] += triangle.get(i).get(0);
        }
        int min = f[0];
        for (int i = 1; i < n; i++) {
            min = Math.min(min, f[i]);
        }
        return min;
    }
}
