
class Solution {
    public String longestCommonPrefix(String[] strs) {
 String maxStr = strs[0];
        for (int i = 1; i < strs.length; i++) {
            String s = strs[i];
            int j = 0;
            for (; j < Math.min(s.length(), maxStr.length()); j++) {
                if (s.charAt(j) != maxStr.charAt(j)) break;
            }
            maxStr = maxStr.substring(0, j);
        }
        return maxStr;
    }
}