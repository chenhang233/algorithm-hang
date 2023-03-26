class Solution {
public boolean primeSubOperation(int[] nums) {
        int n = nums.length;
        int max = nums[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            if (nums[i] < max) {
                max = nums[i];
            } else {
                int need = nums[i] - max + 1;
                              if (need % 2 == 0 && need != 2) need += 1;
                while (true) {
                    if (!IsPrime(need) || need == 1) {
                        need++;
                    } else {
                        break;
                    }
                }
                max = nums[i] - need;
                nums[i] = max;
            }
        }
            System.out.println(Arrays.toString(nums));

        return max > 0;
    }

    public boolean IsPrime(int num) {
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}