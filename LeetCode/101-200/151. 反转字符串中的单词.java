import java.util.StringJoiner;
class Solution {
    public String reverseWords(String s) {
    String[] s1 = s.split(" ");
        int n = s1.length;
        StringJoiner sj = new StringJoiner(" ");
        for (int i = n - 1; i >= 0; i--) {
           String trim = s1[i].trim();
            if (trim.length() > 0) sj.add(trim);
        }
        return sj.toString().trim();
    }
}