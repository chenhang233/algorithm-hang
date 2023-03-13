class Solution {
    public  boolean isMatch(String s, String p) {
        int sl = s.length();
        int pl = p.length();
        boolean[][] dp = new boolean[sl + 1][pl + 1];
        dp[0][0] = true;
        for (int i = 0; i <= sl; i++) {
            for (int j = 1; j <= pl; j++) {
                if (p.charAt(j - 1) == '*') {
                    dp[i][j] = dp[i][j - 2];
                    if (match(s,p,i,j - 1) && !dp[i][j]) dp[i][j] = dp[i - 1][j];
                } else {
                   if (match(s,p,i,j)) {
                       dp[i][j] = dp[i - 1][j - 1];
                   }
                }
            }
        }
        return dp[sl][pl];
    }
    public boolean match(String s,String p, int i, int j) {
        if (i == 0) return false;
        if (p.charAt(j - 1) == '.') return true;
        return s.charAt(i - 1) == p.charAt(j - 1);
    }
}