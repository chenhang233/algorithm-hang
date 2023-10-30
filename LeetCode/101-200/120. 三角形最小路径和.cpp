class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        int res;
        int m = triangle.size();
        int k = triangle[m - 1].size();
        int prev[k];
        memset(prev, 0, sizeof(prev));
        prev[0] = res = triangle[0][0];
        
        if (m == 1) return res;
        prev[0] += triangle[1][0];
        prev[1] += triangle[0][0] + triangle[1][1];
        for (int i = 2;i < m; i++) {
            int n = triangle[i].size();
            prev[n -1] = triangle[i][n - 1] + prev[n - 2];
            for (int j = n - 2; j > 0;j--) {
                prev[j] = triangle[i][j] + min(prev[j],prev[j - 1]);
            }
            prev[0] += triangle[i][0];
        }
        res = prev[0];
        for (int i = 1;i < k;i++) {
            res = min(prev[i],res);
        }
        return res;
    }
};