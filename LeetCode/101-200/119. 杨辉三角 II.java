class Solution {
    public List<Integer> getRow(int rowIndex) {
         ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        for (int i = 1; i <= rowIndex; i++) {
            list.add(0);
            for (int j = list.size() - 1; j > 0; j--) {
                list.set(j, list.get(j) + list.get(j - 1));
            }
        }
        return list;
    }
}