class Solution {
       public String truncateSentence(String s, int k) {
        String[] s1 = s.split(" ");
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < k; i++) {
            sb.append(s1[i]);
            if (i == k -1) break;
            sb.append(" ");
        }
        return sb.toString();
    }
    public String truncateSentence(String s, int k) {
    int n = s.length();
        int end = 0,count = 0;
        for (int i = 0; i <= n; i++) {
            if (n == i || s.charAt(i) == ' ') {
                count++;
                if (count == k) {
                    end = i;
                    break;
                }
            }
        }
        return s.substring(0,end);
    }
}