class Solution {
    int[][] directions = new int[][]{
            {-1, 0},
            {0, 1},
            {1, 0},
            {0, -1}
    };
    int row,col;
    public int numIslands(char[][] grid) {
        this.row = grid.length;
        this.col = grid[0].length;
        int count = 0;
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (grid[i][j] == '1') {
                    count++;
                    dfs(i,j,grid);
                }
            }
        }
        return count;
    }
    public void dfs(int row,int col, char[][] grid) {
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{row,col});
        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            int cr = cur[0];
            int cc = cur[1];
            for (int[] dir : directions) {
                int nextR = dir[0] + cr;
                int nextC = dir[1] + cc;
                if (nextR >= 0 && nextR < this.row && nextC >= 0 && nextC < this.col && grid[nextR][nextC] == '1') {
                    grid[nextR][nextC] = 0;
                    queue.add(new int[]{nextR,nextC});
                }
            }
        }
    }
}