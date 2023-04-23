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
// l=1  m=5 r=9
// l=1 r=4 m=2
//l=2 r=4 m=3
// m=3 l=3 r=4