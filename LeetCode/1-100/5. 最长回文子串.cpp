class Solution {
public:
    string longestPalindrome(string s) {
        int n = s.size();
        if (n < 2) {
            return s;
        }
        int max_len = 1;
        int l_start = 0;

        vector<vector<bool>> dp(n,vector<bool>(n));
        for (int i = 0; i < n; i++) {
            dp[i][i] = true;
        }
        for (int L = 2; L <= n; L++) {
            for (int i = 0; i < n; i++) {
                int j = i + L - 1;
                if (j >= n) break;
                if (s[i] == s[j]) {
                    if (j - i < 3) {
                        dp[i][j] = true;
                    } else {
                        dp[i][j] = dp[i+1][j-1];
                    }
                    if (dp[i][j] && j - i +1 > max_len) {
                        max_len = j - i +1;
                        l_start = i;
                    }
                } else {
                    dp[i][j] = false;
                }
            }
        }
        return s.substr(l_start,max_len);
    }
};