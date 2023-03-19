class Solution {
    public boolean isValid(String s) {
        int n = s.length();
        if (n % 2 == 1) return false;
        Map<Character, Character> pairs = new HashMap<Character, Character>() {{
            put(')', '(');
            put(']', '[');
            put('}', '{');
        }};
        Deque<Character> stack = new LinkedList<>();
        for (int i = 0; i < n; i++) {
            if (pairs.containsKey(s.charAt(i))) {
                if (stack.isEmpty() || stack.pop() != pairs.get(s.charAt(i))) {
                    return false;
                }
            } else {
                stack.push(s.charAt(i));
            }
        }
        return stack.size() == 0;
    }
}