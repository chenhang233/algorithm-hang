class Solution {
    public long[] distance(int[] nums) {
        HashMap<Long,Integer> map1 = new HashMap<>();
        HashMap<Long,List<Integer>> map2 = new HashMap<>();
        long[] res = new long[nums.length];
        for (int i = 0; i < nums.length; i++) {
            long cur = nums[i];
            map1.put(cur, map1.getOrDefault(cur,0) + 1);
            List<Integer> list = map2.getOrDefault(cur, new ArrayList<>());
            list.add(i);
            map2.put(cur, list);
        }
        for (Map.Entry<Long, Integer> le : map1.entrySet()) {
            Long key = le.getKey();
            Integer value = le.getValue();
            if (value >= 2) {
                List<Integer> list = map2.get(key);
                for (int i = 0; i < list.size(); i++) {
                    Integer index = list.get(i);
                    for (Integer index2 : list) {
                        if (!Objects.equals(index2, index)) {
                            res[index] += Math.abs(index - index2);
                        }
                    }
                }
            }
        }

        return res;
    }
}