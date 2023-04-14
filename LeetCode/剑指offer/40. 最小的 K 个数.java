class Solution {
    public int[] getLeastNumbers(int[] arr, int k) {
   PriorityQueue<Integer> pq = new PriorityQueue<>();
        int[] res = new int[k];
        for (int i : arr) {
            pq.offer(i);
        }
        for (int i = 0; i < k; i++) {
            res[i] = pq.poll();
        }
        return res;
    }
}