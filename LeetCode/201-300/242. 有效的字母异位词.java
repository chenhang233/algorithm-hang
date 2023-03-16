class Solution {
    public boolean isAnagram(String s, String t) {
  HashMap<Character,Integer> m1 = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            m1.put(c,m1.getOrDefault(c,0) + 1);
        }
        for (int i = 0; i < t.length(); i++) {
            char c = t.charAt(i);
            m1.put(c,m1.getOrDefault(c,0) - 1);
            if (m1.get(c) < 0) return false;
        }
        for (Integer v : m1.values()) {
            if (v != 0) return false;
        }
        return true;
    }
}