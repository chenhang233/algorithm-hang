class Solution {
    public String decodeMessage(String key, String message) {
        HashMap<Character,Character> hm = new HashMap<>();
        char start = 'a';
        for (char c : key.toCharArray()) {
            if (c != ' ' && !hm.containsKey(c)) {
                hm.put(c,start++);
            }
        }
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < message.length(); i++) {
            char c = message.charAt(i);
            if (c != ' ') c = hm.get(c);
            sb.append(c);
        }
        return sb.toString();
    }
}