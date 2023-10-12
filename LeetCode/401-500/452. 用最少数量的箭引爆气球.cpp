class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& points) {
        int n = points.size();
        if (n == 0) return 0;
        sort(points.begin(),points.end(),[](const auto &a,const auto &b) {
            return a[1] < b[1];
        });
        int ans = 1;
        int right = points[0][1];
        for (int i = 1; i < n; i++) {
            if (points[i][0] > right) {
                ans++;
                right = points[i][1];
            }
        }
        return ans;
    }
};