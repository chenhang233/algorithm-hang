class Solution {
    public int multiply(int A, int B) {
     if (B == 1) return  A;
        return A + multiply(A,B - 1);
    }
}