int MaxInt(int a, int b)
{
    return a > b ? a : b;
}

int calculate(int *arr, int n)
{
    int choose = (n + 1) / 3;
    int dp[n + 1][choose + 1];
    memset(dp, 0, sizeof(dp));
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= choose; j++)
        {
            dp[i][j] = MaxInt(dp[i - 1][j], (i == 1 ? 0 : dp[i - 2][j - 1]) + arr[i - 1]);
        }
    }
    return dp[n][choose];
}

int maxSizeSlices(int *slices, int slicesSize)
{
    int n = slicesSize - 1;
    int arr1[n], arr2[n];
    for (int i = 0; i < n; i++)
    {
        arr1[i] = slices[i];
        arr2[i] = slices[i + 1];
    }
    return MaxInt(calculate(arr1, n), calculate(arr2, n));
}