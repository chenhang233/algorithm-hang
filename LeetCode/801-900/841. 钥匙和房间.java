class Solution {
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
 int length = rooms.size();
        boolean[] visited = new boolean[length];
        List<Integer> list = new ArrayList<>();
        list.add(0);
        int count = 0;
        while (!list.isEmpty()) {
            List<Integer> nextList = new ArrayList<>();
            for (int i = 0; i < list.size(); i++) {
                int a = list.get(i);
                if (!visited[a]) {
                    count++;
                    visited[a] = true;
                    List<Integer> cur = rooms.get(a);
                    nextList.addAll(cur);
                }
            }
            list = new ArrayList<>(nextList);
        }
        return count == length;
    }

       int count = 0;
    boolean[] visited;
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        int length = rooms.size();
        visited = new boolean[length];
        dfs(rooms,0);
        return count == length;
    }
    public void dfs(List<List<Integer>> rooms,int  i) {
        List<Integer> list = rooms.get(i);
        visited[i] = true;
        count++;
        for (Integer j : list) {
            if (!visited[j]) {
                dfs(rooms,j);
            }
        }
    }
}

