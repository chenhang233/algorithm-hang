class Solution {
     static int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
   public int[][] updateMatrix(int[][] mat) {
        int y = mat.length, x = mat[0].length;
        int[][] answer = new int[y][x];
        boolean[][] visited = new boolean[y][x];
        Queue<int[]> queue = new LinkedList<>();
        for (int i = 0; i < y; i++) {
            for (int j = 0; j < x; j++) {
               int cur =  mat[i][j];
                if (cur == 0) {
                    queue.add(new int[]{i,j});
                    visited[i][j] = true;
                }
            }
        }
        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            int r = cur[0];
            int c = cur[1];
            for (int i = 0; i < 4; i++) {
                int nr = dirs[i][0] + r;
                int nc = dirs[i][1] + c;
                if (nr >= 0 && nr < y && nc >= 0 && nc < x && !visited[nr][nc]) {
                    answer[nr][nc] = answer[r][c] + 1;
                    visited[nr][nc] = true;
                    queue.add(new int[]{nr,nc});
                }
            }
        }
        return answer;
    }
}