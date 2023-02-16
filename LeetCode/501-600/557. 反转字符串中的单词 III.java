class Solution {
    public String reverseWords(String s) {
  String[] strArr = s.split(" ");
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < strArr.length; i++) {
            char[] chars = strArr[i].toCharArray();
            for (int j = chars.length -1; j >= 0; j--) {
                sb.append(chars[j]);
            }
            if (i != strArr.length - 1) sb.append(" ");
        }
        return sb.toString();
    }
}