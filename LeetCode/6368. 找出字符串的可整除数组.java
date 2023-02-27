class Solution {
    public int[] divisibilityArray(String word, int m) {
    int n = word.length();
        long x = 0;
        int[] answer = new int[n];
        for (int i = 0; i < n; i++) {
            x = (x*10 + (word.charAt(i) - '0')) % m;
            if (x == 0) answer[i] = 1;
        }
        return answer;
    }
}