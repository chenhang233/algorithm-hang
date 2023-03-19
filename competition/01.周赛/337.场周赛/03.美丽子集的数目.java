class Solution {
  ArrayList<Integer>[] lists;
    int n;
    public int beautifulSubsets(int[] nums, int k) {
        ArrayList<Integer> list = new ArrayList<>();
        for (int num : nums) {
            list.add(num);
        }
                lists = new ArrayList[nums.length];
        dfs(0, list);
        for (ArrayList<Integer> integers : lists) {
            System.out.println(integers.toString());
        }
        return 0;
    }

    public void dfs(int i, ArrayList<Integer> list) {
        if (i == list.size()) {
            ArrayList<Integer> l = new ArrayList<>();
            for (Integer in : list) {
                l.add(in);
            }
            lists[n++] = l;
        }
        dfs(i + 1, list);
        list.remove(list.size() - 1);
        dfs(i + 1, list);
    }
}