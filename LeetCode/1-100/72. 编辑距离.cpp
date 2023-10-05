class Solution {
public:
    int minDistance(string word1, string word2) {
            int m = word1.length(), n = word2.length();
            vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
            if (m *n == 0) return m+n;
            for (int i = 1; i <= n; i++) {
                dp[0][i] = i;
            }
            for (int i = 1; i <= m; i++) {
                dp[i][0] = i;
            }
            for (int i = 1; i < m + 1; i++) {
                for (int j = 1; j < n + 1; j++) {
                    int l = dp[i][j - 1] + 1;
                    int r = dp[i - 1][j] + 1;
                    int temp = dp[i - 1][j - 1];
                    if (word1[i - 1] != word2[j - 1]) temp += 1;
                    dp[i][j] = min(l,min(r,temp));
                }
            }
            return dp[m][n];
    }
};