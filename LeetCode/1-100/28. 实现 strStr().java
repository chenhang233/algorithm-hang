class Solution {
    public int strStr(String haystack, String needle) {
    int len = haystack.length();
        int len2 = needle.length();
        for (int i = 0; i < len - len2 + 1; i++) {
            if (haystack.substring(i,i+ len2).equals(needle)) return i;
        }
        return -1;
    }
}