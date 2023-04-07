class Solution {
  ArrayList<Integer> temp = new ArrayList<>();
    List<List<Integer>> an = new ArrayList<>();
    public List<List<Integer>> combine(int n, int k) {
        dfs(1,n,k);
        return an;
    }

    public void dfs(int cur,int n, int k) {
        if (temp.size() + (n - cur + 1) < k) return;
        if (temp.size() == k) {
            an.add(new ArrayList<>(temp));
            return;
        }
        temp.add(cur);
        dfs(cur + 1, n,k);
        temp.remove(temp.size() - 1);
        dfs(cur +1, n,k);
    }
}