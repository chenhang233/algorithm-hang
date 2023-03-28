class Solution {
    private static final int WALL = -1;
    private static final int GATE = 0;
    private static final int EMPTY = Integer.MAX_VALUE;
    private static final int[][] DIRECTIONS = new int[][]{
            {-1,0},
            {1,0},
            {0,-1},
            {0,1}
    };
    private static int row = 0;
    private static int col = 0;
    public void wallsAndGates(int[][] rooms) {
        if (rooms.length == 0) return;
        row = rooms.length;
        col = rooms[0].length;
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                  if (rooms[i][j] == EMPTY){
                    rooms[i][j] =  findOut(i,j,rooms);
                    System.out.println(rooms[i][j]);
                }
            }
        }
    }

    public int findOut(int row,int col,int[][] rooms) {
        int[][] data = new int[this.row][this.col];
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{row,col});
        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            int ro =  cur[0];
            int co = cur[1];
            for (int[] dir : DIRECTIONS) {
                int r = dir[0] + ro;
                int c = dir[1] + co;
                if (r < 0 || r >= this.row || c < 0 || c >= this.col || rooms[r][c] == WALL || data[r][c] != 0) continue;
                data[r][c] = data[ro][co] + 1;
                if (rooms[r][c] == GATE) return data[r][c];
                queue.add(new int[]{r,c});
            }
        }
        return EMPTY;
    }
}