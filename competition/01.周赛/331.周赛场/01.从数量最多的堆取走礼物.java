class Solution {
    public long pickGifts(int[] gifts, int k) {
  PriorityQueue<Integer> py = new PriorityQueue<>(new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o2 - o1;
            }
        });
        for (int i = 0; i < gifts.length; i++) {
            py.offer(gifts[i]);
        }
        while (k-- != 0) {
            double sqrt = Math.sqrt(py.poll());
            py.offer((int) sqrt);
        }
        AtomicReference<Long> res = new AtomicReference<>(0L);
        py.forEach(n -> res.updateAndGet(v -> v + n));
        return  res.get();
    }
}