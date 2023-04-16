class Solution {
    public int maxDivScore(int[] nums, int[] divisors) {
       int d = divisors.length, minD = Integer.MAX_VALUE;
        int[] divisorsCount = new int[d];
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < d; j++) {
                int v =divisors[j];
                if (v < minD) minD = v;
                int t = nums[i] % v;
                if (t == 0) divisorsCount[j]++;
            }
        }
        int max = 0,res = 0,index = -1;
        for (int i = 0; i < d; i++) {
            int c =divisorsCount[i];
            if (c > max) {
                max = c;
                index = i;
                res = divisors[i];
            } else if (c != 0 && c == max && divisors[i] < divisors[index]) {
                res = divisors[i];
            }
        }
        if (index == -1) res = minD;
        return res;
    }
}