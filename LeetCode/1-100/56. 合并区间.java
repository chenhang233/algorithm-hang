class Solution {
    public int[][] merge(int[][] intervals) {
  Arrays.sort(intervals,(t1,t2) -> t1[0] - t2[0]);
        ArrayList<int[]> list = new ArrayList<>();
        int[] temp = intervals[0];
        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] > temp[1]) {
                list.add(temp);
                temp = intervals[i];
            } else {
                temp[1] = Math.max(intervals[i][1],temp[1]);
            }
        }
        list.add(temp);
        return list.toArray(new int[list.size()][]);
    }
}