class Solution {
public:
    int fib(int n) {
        if (n <= 1) return n;
        int dp[n + 1];
        dp[0] = 0;
        dp[1] = 1;
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
        int fib(int n) {
        if (n <= 1) return n;
        int j = 0;
        int k = 1;
        int ans = 0;
        for (int i = 2; i <= n; i++) {
            ans = j + k;
            j = k;
            k = ans;
        }
        return ans;
    }
};