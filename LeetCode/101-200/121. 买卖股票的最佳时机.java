class Solution {
    public int maxProfit(int[] prices) {
  int maxP = 0,minPrice = Integer.MAX_VALUE;
        for (int i = 0; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            } else if (prices[i] - minPrice > maxP) {
                maxP = prices[i] - minPrice;
            }
        }
        return maxP;
    }
}