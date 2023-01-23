class Solution {
     public long maxScore(int[] nums1, int[] nums2, int k) {
        long maxScore = 0;
        int n = nums1.length;
        int[][] matrix = new int[n][2];
        for (int i = 0; i < n; i++) {
            matrix[i][0] = nums1[i];
            matrix[i][1] = nums2[i];
        }
        Arrays.sort(matrix,(a,b) -> b[1] - a[1]);
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        long sum = 0;
        for (int i = 0; i < n; i++) {
            if (i >= k) {
                sum -= pq.poll();
            }
            int[] cur = matrix[i];
            sum += cur[0];
            pq.offer(cur[0]);
            if (i >= k - 1) {
                maxScore = Math.max(maxScore, sum * cur[1]);
            }
        }
        return  maxScore;
    }
}