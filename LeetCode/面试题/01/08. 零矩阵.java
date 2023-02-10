class Solution {
    public void setZeroes(int[][] matrix) {
  int n = matrix.length;
        int n2 =matrix[0].length;
        boolean[] rowZero = new boolean[n];
        boolean[] colZero = new boolean[n2];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n2; j++) {
                if (matrix[i][j] == 0) {
                    rowZero[i] = true;
                    colZero[j] = true;
                }
            }
        }
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n2; j++) {
                if (rowZero[i] || colZero[j]) matrix[i][j] = 0;
            }
        }
    }
}