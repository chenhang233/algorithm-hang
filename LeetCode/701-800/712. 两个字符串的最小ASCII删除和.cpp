class Solution
{
public:
    int minimumDeleteSum(string s1, string s2)
    {
        int m = s1.size() + 1, n = s2.size() + 1;
        int dp[m][n];
        dp[0][0] = 0;
        for (int i = 1; i < m; i++)
        {
            dp[i][0] = s1[i - 1] + dp[i - 1][0];
        }
        for (int i = 1; i < n; i++)
        {
            dp[0][i] = s2[i - 1] + dp[0][i - 1];
        }
        for (int i = 1; i < m; i++)
        {
            char c1 = s1[i - 1];
            for (int j = 1; j < n; j++)
            {
                char c2 = s2[j - 1];
                if (c1 == c2)
                {
                    dp[i][j] = dp[i - 1][j - 1];
                }
                else
                {
                    dp[i][j] = min(dp[i - 1][j] + c1, dp[i][j - 1] + c2);
                }
            }
        }
        return dp[m - 1][n - 1];
    }
};