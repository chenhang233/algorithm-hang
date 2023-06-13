/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int **transpose(int **matrix, int matrixSize, int *matrixColSize, int *returnSize, int **returnColumnSizes)
{
    int m = matrixSize;
    int n = matrixColSize[0];
    int i, j;
    int **res = malloc(sizeof(int *) * n);
    *returnColumnSizes = malloc(sizeof(int) * n);
    for (i = 0; i < n; i++)
    {
        res[i] = malloc(sizeof(int) * m);
        (*returnColumnSizes)[i] = m;
        for (j = 0; j < m; j++)
        {
            res[i][j] = matrix[j][i];
        }
    }
    *returnSize = n;
    return res;
}
