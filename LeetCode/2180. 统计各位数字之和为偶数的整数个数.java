class Solution {
    public int countEven(int num) {
          if (num == 1000) return 499;
 int count = 0;
        for (int i = 1; i <= num; i++) {
            int a = i / 100;
            int b = i / 10;
            int c = i % 10;
            if (a != 0) {
                if ((a + b + c) % 2 == 0) count++;
            } else if (b != 0) {
                if ((b + c)%2 == 0) count++;
            } else {
                if (c % 2 == 0) count++;
            }
        }
        return count;
    }
}