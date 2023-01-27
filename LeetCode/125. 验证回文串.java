class Solution {
    public boolean isPalindrome(String s) {
 String s1 = s.replaceAll("[^A-Za-z0-9]", "").toLowerCase();
        char[] chars = s1.toCharArray();
        int l= 0, r = s1.length() -1;
        while (l < r) {
            if (chars[l] != chars[r]) return  false;
            else {
                l++;
                r--;
            }
        }
        return  true;
    }
}