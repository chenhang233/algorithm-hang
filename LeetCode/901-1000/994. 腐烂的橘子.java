class Solution {
        static int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

    public int orangesRotting(int[][] grid) {
     Queue<int[]> queue = new LinkedList<>();
        int Row = grid.length,Col = grid[0].length;
        int res = 0,count = 0;
        boolean[][] visited = new boolean[Row][Col];
        for (int i = 0; i < Row; i++) {
            for (int j = 0; j < Col; j++) {
                if (grid[i][j] == 2) {
                    queue.add(new int[]{i,j});
                    visited[i][j] = true;
                } else if (grid[i][j] == 1)count++;
            }
        }
        while (!queue.isEmpty()) {
            int n = queue.size();
            res++;
            for (int i = 0; i < n; i++) {
                int[] cur = queue.poll();
                for (int j = 0; j < 4; j++) {
                    int nr = cur[0] + dirs[j][0];
                    int nc = cur[1] + dirs[j][1];
                    if (nr >= 0 && nr < Row && nc >= 0 && nc < Col && !visited[nr][nc] && grid[nr][nc] == 1) {
                        queue.add(new int[]{nr,nc});
                        visited[nr][nc] = true;
                        count--;
                    }
                }   
            }
        }
 if (count == 0) return Math.max(0,res - 1);
        return -1;
    }
}