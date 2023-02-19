1class Solution {
    public boolean equalFrequency(String word) {
  HashMap<Character,Integer> hm= new HashMap<>();
        TreeMap<Integer,Integer> tm = new TreeMap<>();
        char[] chars = word.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            hm.put(chars[i],hm.getOrDefault(chars[i],0) + 1);
        }
        for (Map.Entry<Character, Integer> en : hm.entrySet()) {
            tm.put(en.getValue(),tm.getOrDefault(en.getValue(),0) + 1);
        }
        int size = tm.size();
        if (size > 2) return false;
        if (size == 1) return  hm.size() == 1 || tm.containsKey(1) ;
        return tm.containsKey(1) && tm.get(1) == 1 || tm.lastKey() - tm.firstKey() == 1 && tm.lastEntry().getValue() == 1;
    }
}