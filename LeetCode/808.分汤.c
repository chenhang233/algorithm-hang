
#define MAX(a, b) (a > b ? a : b)

double soupServings(int n)
{
    n = ceil((double)n / 25);
    if (n >= 179)
        return 1.0;
    double db[n + 1][n + 1];
    db[0][0] = 0 + 1.0 / 2.0;
    for (int i = 1; i <= n; i++)
    {
        db[i][0] = 0.0;
        db[0][i] = 1.0 + 0;
    }
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            db[i][j] = (db[MAX(i - 4, 0)][j] + db[MAX(i - 3, 0)][MAX(j - 1, 0)] + db[MAX(i - 2, 0)][MAX(j - 2, 0)] + db[MAX(i - 1, 0)][MAX(j - 3, 0)]) / 4.0;
        }
    }
    return db[n][n];
}