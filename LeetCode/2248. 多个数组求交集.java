class Solution {
    public List<Integer> intersection(int[][] nums) {
        int len = nums.length;
        ArrayList<Integer> list = new ArrayList<>();
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int[] num : nums) {
            for (int i = 0; i < num.length; i++) {
                map.put(num[i], map.getOrDefault(num[i], 0) + 1);
            }
        }
        System.out.println(map);
        for (Map.Entry<Integer, Integer> ie : map.entrySet()) {
            Integer value = ie.getValue();
            if (value == len) {
                list.add(ie.getKey());
            }
        }
    list.sort(Comparator.comparingInt(a -> a));
        return list;
    }
}