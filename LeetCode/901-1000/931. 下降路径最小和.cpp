class Solution {
public:
    int minFallingPathSum(vector<vector<int>>& matrix) {
        int m  = matrix.size();
        int dp[m][m];
        for (int i = 0; i < m; i++) {
            dp[0][i] = matrix[0][i];
        }
        for (int i = 1; i < m; i++) {
            for (int j = 0; j < m; j++) {
                int a =dp[i-1][j ? j -1 : 0],b = dp[i-1][j],c =dp[i-1][j+1 == m ? j : j+1];
                dp[i][j] = min(c,min(a,b)) + matrix[i][j];
                cout << dp[i][j]  << endl;
                if (i == m - 1 && j > 0) 
                    dp[i][j] = min(dp[i][j],dp[i][j-1]);
            }
        }
        
        return dp[m-1][m-1];
    }
};