class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
 HashMap<Character,Integer> map = new HashMap<>();
        for (char c : magazine.toCharArray()) {
            map.put(c,map.getOrDefault(c,0) + 1);
        }
        for (int i = 0; i < ransomNote.length(); i++) {
           char c = ransomNote.charAt(i);
            map.put(c,(int) map.getOrDefault(c,0) - 1);
            if (map.get(c) < 0) return false;
        }
        return true;
    }
}