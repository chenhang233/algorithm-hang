#include <math.h>
int minPathSum(int **grid, int gridSize, int *gridColSize)
{
    int row = gridSize, col = gridColSize[0];
    int db[row][col];
    db[0][0] = grid[0][0];
    for (int i = 1; i < row; ++i)
    {
        db[i][0] = db[i - 1][0] + grid[i][0];
    }
    for (int i = 1; i < col; ++i)
    {
        db[0][i] = db[0][i - 1] + grid[0][i];
    }
    for (int i = 1; i < row; ++i)
    {
        for (int j = 1; j < col; ++j)
        {
            db[i][j] = fmin(db[i - 1][j], db[i][j - 1]) + grid[i][j];
        }
    }
    return db[row - 1][col - 1];
}