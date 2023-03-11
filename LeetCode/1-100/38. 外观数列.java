class Solution {
    public String countAndSay(int n) {
    String res = "1";
        for (int i = 2; i <= n; i++) {
            int position = 0,start = 0;
            StringBuilder sb = new StringBuilder();
            int sl = res.length();
            while (position < sl) {
                while (res.charAt(start) == res.charAt(position)) {
                    position++;
                    if (position == sl) break;
                }
                String s = (position - start) + "" + res.charAt(start);
                sb.append(s);
                start = position;
            }
            res = sb.toString();
        }
        return res;
    }
}