class Solution {
    public double maxAverageRatio(int[][] classes, int extraStudents) {

        PriorityQueue<int[]> pq = new PriorityQueue<>(new Comparator<int[]>() {
            @Override
            public int compare(int[] a, int[] b) {
                long val1 = (long) (b[1] + 1) * b[1] * (a[1] - a[0]);
                long val2 = (long) (a[1] + 1) * a[1] * (b[1] - b[0]);
                if (val1 == val2) {
                    return 0;
                }
                return val1 < val2 ? 1 : -1;
            }
        });
        for (int[] c : classes) {
            pq.offer(new int[]{c[0], c[1]});
        }
        for (int i = 0; i < extraStudents; i++) {
            int[] remove = pq.poll();
            int r1 = remove[0],r2 = remove[1];
            pq.offer(new int[] {r1+ 1,r2 + 1});
        }
        double res =0;
        for (int i = 0; i < classes.length; i++) {
            int[] poll = pq.poll();
              res += 1.0 * poll[0] / poll[1];
        }
        return res / classes.length;
    }
}