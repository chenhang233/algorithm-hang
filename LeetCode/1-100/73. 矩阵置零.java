class Solution {
    public void setZeroes(int[][] matrix) {
  boolean row = false,col = false;
        int n = matrix.length,r = matrix[0].length;
        for (int i = 0; i < r; i++) {
            if (matrix[0][i] == 0) {
                row = true;
                break;
            }
        }
        for (int i = 0; i < n; i++) {
            if (matrix[i][0] == 0) {
                col = true;
                break;
            }
        }
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < r; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < r; j++) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;
            }
        }
        if (row) {
            for (int i = 0; i < r; i++) {
               matrix[0][i] = 0;
            }
        }
        if (col) {
            for (int i = 0; i < n; i++) {
                matrix[i][0] = 0;
            }
        }
    }
}