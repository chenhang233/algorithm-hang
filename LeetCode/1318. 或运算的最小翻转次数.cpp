class Solution {
public:
    int minFlips(int a, int b, int c) {
        int res = 0;
        for (int i = 0; i < 32; i++) {
            int a_bit = (a >> i) & 1;
            int b_bit = (b >> i) & 1;
            int c_bit = (c >> i) & 1;
            if (c_bit == 0) {
                res += (a_bit + b_bit);
            } else {
                res += (a_bit + b_bit == 0);
            }
        }
        return res;
    }
};