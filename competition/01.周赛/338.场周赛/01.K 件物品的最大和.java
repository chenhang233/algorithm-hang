class Solution {
    public int kItemsWithMaximumSum(int numOnes, int numZeros, int numNegOnes, int k) {
    int[] types = new int[]{1,0,-1};
        if (numOnes >= k) {
            return  types[0] * k;
        } else if (numOnes + numZeros >= k) {
            return types[0] * numOnes;
        } else {
            return types[0] * numOnes + types[2] * (k - numOnes - numZeros);
        }
    }
}