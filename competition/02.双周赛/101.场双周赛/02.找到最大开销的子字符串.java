class Solution {
    public int maximumCostSubstring(String s, String chars, int[] vals) {
     HashMap<Character,Integer> cMap = new HashMap<>();
        for (int i = 0; i < 26; i++) {
            char c = (char) ('a' + i);
            cMap.put(c,i + 1);
        }
        for (int i = 0; i < chars.length(); i++) {
            char c = chars.charAt(i);
            cMap.put(c,vals[i]);
        }
        int max = 0,len = s.length();
        int[] dp = new int[len + 1];
        dp[0] = 0;
        for (int i = 0; i < len; i++) {
            Integer cur = cMap.get(s.charAt(i));
                       max = Math.max(Math.max(max, cur),dp[i]);
            dp[i + 1] =Math.max(dp[i] + cur, cur);
        }
                System.out.println(Arrays.toString(dp));
        System.out.println(max);
        return Math.max(max,dp[len]);
    }
}