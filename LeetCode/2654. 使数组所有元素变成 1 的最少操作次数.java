class Solution {
   private int gcd(int a, int b) {
        while (a != 0) {
            int tmp = a;
            a = b % a;
            b = tmp;
        }
        return b;
    }

    public int minOperations(int[] nums) {
     int n = nums.length,gcdAll = 0,cnt1 = 0;
        for (int num : nums) {
            gcdAll =gcd(gcdAll,num);
            if (num == 1) cnt1++;
        }
        if (gcdAll != 1) return -1;
        if (cnt1 > 0) return n-cnt1;
        int minSize = n;
        for (int i = 0; i < n; i++) {
            int g = 0;
            for (int j = i; j < n; j++) {
                g = gcd(g,nums[j]);
                if (g == 1) {
                    minSize = Math.min(minSize,j - i + 1);
                    break;
                }
            }
        }
        return minSize + n -2;
    }
}