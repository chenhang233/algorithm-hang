class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int color) {
     int initColor = image[sr][sc];
        int[][] directions = new int[][]{
                {-1, 0},
                {0, 1},
                {1, 0},
                {0, -1}
        };
        int maxR = image.length,maxC = image[0].length;
        boolean[][] visited = new boolean[maxR][maxC];
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{sr,sc});
        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            int curR = cur[0];
            int curC = cur[1];
            image[curR][curC] = color;
            visited[curR][curC] = true;
            for (int[] dir : directions) {
                int nextR = dir[0] + curR;
                int nextC = dir[1] + curC;
                if (nextR >= 0 && nextC >= 0 && nextR < maxR && nextC < maxC && image[nextR][nextC] == initColor && !visited[nextR][nextC]) {
                    queue.add(new int[]{nextR,nextC});
                }
            }
        }
        return image;
    }
}