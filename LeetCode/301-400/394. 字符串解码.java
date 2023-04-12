class Solution {
    public String decodeString(String s) {
  int num = 0;
        StringBuilder sb = new StringBuilder();
        Deque<Integer> numStack = new ArrayDeque<>();
        Deque<StringBuilder> sbStack = new ArrayDeque<>();
        for (char c : s.toCharArray()) {
            if (c >= '0' && c <= '9') {
                num = num * 10 + (c -'0');
            } else if (c == '[') {
                numStack.push(num);
                sbStack.push(sb);
                sb = new StringBuilder();
                num = 0;
            } else if (c == ']') {
                StringBuilder prev = sbStack.pop();
                Integer n = numStack.pop();
                for (Integer i = 0; i < n; i++) {
                    prev.append(sb);
                }
                sb = prev;
            } else {
                sb.append(c);
            }
        }
        return sb.toString();
    }
}