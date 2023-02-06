class Solution {
    public int[] vowelStrings(String[] words, int[][] queries) {
  HashSet<Character> set = new HashSet<>();
        set.add('a');
        set.add('e');
        set.add('i');
        set.add('o');
        set.add('u');
        int[] temp = new int[words.length + 1];
        int[] answer = new int[queries.length];
        for (int i = 0; i < words.length; i++) {
            if (set.contains(words[i].charAt(0)) && set.contains(words[i].charAt(words[i].length() - 1))) temp[i + 1] = temp[i] + 1;
            else temp[i + 1] = temp[i];
        }
        for (int i = 0; i < queries.length; i++) {
            int[] query = queries[i];
            answer[i] = temp[query[1] + 1] - temp[query[0]];
        }
        return answer;
    }
}