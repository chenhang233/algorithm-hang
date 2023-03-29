class Solution {
    public int findContentChildren(int[] g, int[] s) {
     Arrays.sort(g);
        Arrays.sort(s);
        int count = 0;
        int i = 0;
        int j = 0;
        while (i < g.length && j < s.length) {
            int needMin = g[i];
            while (s[j] < needMin) {
                if (j == s.length - 1) return count;
                j++;
            }
            count++;
            i++;
            j++;
        }
        return count;
    }
}