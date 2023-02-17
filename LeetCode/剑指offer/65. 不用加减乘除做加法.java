class Solution {
    public int add(int a, int b) {
 if (b == 0) return  a;
        int c = (a & b) << 1;
        return add(a ^ b, c);
    }
}