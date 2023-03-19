class Solution {
    public boolean checkValidGrid(int[][] grid) {
       int x = grid.length;
        boolean[][] visited = new boolean[x][x];
        int curInt = 0,curX = 0,curY = 0, endInt = x * x - 1;
        int[][] nextFn = new int[][]{
                {-2,-1},
                {-1,-2},
                {-2,1},
                {-1,2},
                {1,-2},
                {2,-1},
                {1,2},
                {2,1}
        };
        while (true) {
            boolean f = false;
            for (int i = 0; i < nextFn.length; i++) {
                int[] method = nextFn[i];
                int nextX = curX + method[0];
                int nextY = curY + method[1];
                if (nextX >= 0 && nextX < x && nextY >= 0 && nextY < x && grid[nextX][nextY] == curInt + 1 && !visited[nextX][nextY]) {
                    visited[nextX][nextY] = true;
                    curInt++;
                    if (endInt == curInt) return true;
                    curX = nextX;
                    curY = nextY;
                    f = true;
                }
            }
            if (!f) return false;
        }
    }
}