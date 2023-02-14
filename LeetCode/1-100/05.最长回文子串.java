class Solution {
    public String longestPalindrome(String s) {
        int len = s.length();
        String maxStr = "";
        for (int i = 0; i < len; i++) {
            String m1 = getMaxLen(s, i, i);
            String m2 = getMaxLen(s, i, i +1);
            String cur = m1;
            if (m1.length() < m2.length()) cur = m2;
            if (cur.length() > maxStr.length()) maxStr = cur;
        }
        return maxStr;
    }

    public String getMaxLen(String old, int start,int end) {
        while (start >= 0 && end < old.length() && old.charAt(start) == old.charAt(end)) {
            start--;
            end++;
        }
        return old.substring(start + 1, end);
    }
}