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
};