class Solution {
    public boolean validPath(int n, int[][] edges, int source, int destination) {
  List<Integer>[] list = new List[n];
        for (int i = 0; i < n; i++) {
            list[i] = new ArrayList<>();
        }
        for (int[] edge : edges) {
            int x = edge[0],y = edge[1];
            list[x].add(y);
            list[y].add(x);
        }
        boolean[] visited = new boolean[n];
        Queue<Integer> queue = new ArrayDeque<>();
        queue.offer(source);
        visited[source] = true;
        while (!queue.isEmpty()) {
            Integer poll = queue.poll();
            if (poll == destination) break;
            for (Integer go : list[poll]) {
                if (!visited[go]) {
                    queue.offer(go);
                    visited[go] = true;
                }
            }
        }
       return visited[destination];
    }
}