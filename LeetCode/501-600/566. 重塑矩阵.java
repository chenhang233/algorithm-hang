class Solution {
    public int[][] matrixReshape(int[][] mat, int r, int c) {
 int x = mat.length, y = mat[0].length;
        if (x * y != r * c) return mat;
        int nx = 0,ny = 0;
        int[][] m = new int[r][c];
        for (int[] rows : mat) {
            for (int num : rows) {
                m[ny][nx++] = num;
                if (nx == c) {
                    nx = 0;
                    ny++;
                }
            }
        }
        return m;
    }
}