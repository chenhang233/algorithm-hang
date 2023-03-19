class Solution {
    public int[] evenOddBit(int n) {
   String a = "";
        int[] ans = new int[2];
        while (n != 0) {
            a += n % 2;
            n /= 2;
        }
        for (int i = 0; i < a.length(); i++) {
            if (a.charAt(i) - '0' == 1) {
                if (i % 2 == 0) ans[0]++;
                else ans[1]++;
            }
        }
        return ans;
    }
}