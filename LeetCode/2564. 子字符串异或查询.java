class Solution {
     private static final int[] NOT_FOUND = {-1,-1};
    public int[][] substringXorQueries(String s, int[][] queries) {
        HashMap<Integer,int[]> map = new HashMap<>();
        char[] chars = s.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            int bounds = Math.min(chars.length,i + 30);
            for (int j = i; j < bounds; j++) {
                int dec = Integer.parseInt(s.substring(i, j + 1), 2);
                int[] ints = map.get(dec);
                if ( ints == null || j - i < ints[1] - ints[0]) {
                    map.put(dec,new int[] {i, j});
                }
            }
        }
        int[][] answer = new int[queries.length][];
        for (int i = 0; i < queries.length; i++) {
            int[] query = queries[i];
            answer[i] = map.getOrDefault(query[1] ^ query[0], NOT_FOUND);
        }
        return answer;
    }
}