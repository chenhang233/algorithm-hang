class Solution {
    public boolean isPerfectSquare(int num) {
       int l = 1,r = num;
        while (l < r) {
            long m = l +(r - l + 1) / 2; 
            if ((m * m) <= num) {
                l = (int)m;
            } else {
                r = (int)m - 1;
            }
        }
        return l*l == num ;
    }
}