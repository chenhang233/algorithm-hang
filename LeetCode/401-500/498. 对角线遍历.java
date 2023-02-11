class Solution {
    public int[] findDiagonalOrder(int[][] mat) {
  int n = mat.length;
        int m = mat[0].length;
        int[] result = new int[n * m];
        for (int i = 0, index = 0; i < m + n - 1; i++) {
            if (i % 2 == 0) {
                for (int x = Math.min(i, n - 1); x >= Math.max(0, i - m + 1); x--) {
                    result[index++] = mat[x][i - x];
                }
            } else {
                for (int x = Math.max(0, i - m + 1); x <= Math.min(i, n - 1); x++) {
                    result[index++] = mat[x][i - x];
                }
            }
        }
        return result;
    }
}