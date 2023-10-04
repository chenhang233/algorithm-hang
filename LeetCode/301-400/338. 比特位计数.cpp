class Solution {
public:
  int countOne(int i) {
      int c = 0;
      while (i > 0) {
          i &= (i - 1);
          c++;
      }
      return c;
  }
  vector<int> countBits(int n) {
        vector<int> bits(n + 1);
        for (int i = 1; i <= n; i++) {
            bits[i] = countOne(i);
        }
        return bits;
    }
};