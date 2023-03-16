class Solution {
     public int firstUniqChar(String s) {
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (findFirstIndex(s,c) == findLastIndex(s,c)) return i;
        }
        return -1;
    }
    public int findFirstIndex(String s, char c) {
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == c) return i;
        }
        return -1;
    }
    
    public int findLastIndex(String s, char c) {
        for (int i = s.length() - 1; i >= 0; i--) {
            if (s.charAt(i) == c) return i;
        }
        return -1;
    }

}