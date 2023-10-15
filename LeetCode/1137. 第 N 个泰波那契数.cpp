class Solution {
public:
    int tribonacci(int n) {
        int index = 0;
        long sum = 2;
        int arr[3] = {0,1,1};
        if (n < 3) return arr[n];
        for (int i = 3;i < n; i++) {
            int t = arr[index];
            arr[index] = sum;
            sum = sum*2 - t; 
            ++index %= 3;
        }
        return sum;
    }

        int tribonacci2(int n) {
        if (n == 0) return 0;
        if (n <= 2) return 1;
        int t1 = 0,t2 = 1, t3 = 1, t4;
        for (int i = 3; i <= n; i++) {
            t4 = t1+t2+t3;
            t1 = t2;
            t2 = t3;
            t3 = t4;
        }
        return t4;
    }
};