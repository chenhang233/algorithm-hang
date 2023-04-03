class Solution {
    int[][] directions = new int[][]{
            {-1, 0},
            {0, 1},
            {1, 0},
            {0, -1}
    };

    public int maxAreaOfIsland(int[][] grid) {
        int x = grid.length,y = grid[0].length,max = 0;
        for (int i = 0; i < x; i++) {
            for (int j = 0; j < y; j++) {
                if (grid[i][j] == 1) {
                    int k = bfs(grid, i, j,x,y);
                    max = Math.max(k,max);
                }
            }
        }
        return max;
    }
    public int bfs(int[][] grid,int curX,int curY,int maxX,int maxY) {
        int max = 1;
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{curX,curY});
        boolean[][] visited = new boolean[maxX][maxY];
        visited[curX][curY] = true;
        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            int x = cur[0];
            int y = cur[1];
            for (int[] dir : directions) {
                int nextX = x + dir[0];
                int nextY = y + dir[1];
                if (nextX >= 0 && nextX < maxX && nextY >= 0 && nextY < maxY && grid[nextX][nextY] == 1 && !visited[nextX][nextY]) {
                    queue.add(new int[]{nextX,nextY});
                    visited[nextX][nextY] = true;
                    max++;
                }
            }
        }
        return max;
    }
}