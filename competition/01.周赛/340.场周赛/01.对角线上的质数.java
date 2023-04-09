class Solution {
    public boolean IsPrime(int num) {
                if (num == 1) return false;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    public int diagonalPrime(int[][] nums) {
          int x = nums.length;
                if (x == 1) {
           return IsPrime(nums[0][0]) ? nums[0][0] :0;
        }
        int start = 0,end = x - 1,max = 0;
        for (int i = 0; i < x; i++) {
            int s1 = nums[i][start];
            int s2 = nums[i][end];
            if (IsPrime(s1)) max = Math.max(max,s1);
            if (IsPrime(s2)) max = Math.max(max,s2);
                start++;
                end--;
        }
        return max;
    }
}