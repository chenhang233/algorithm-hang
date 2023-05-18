int max(int a, int b)
{
    return a > b ? a : b;
}

int rob(int *nums, int numsSize)
{
    if (numsSize == 0)
        return 0;
    if (numsSize == 1)
        return *nums;
    int *dp = malloc(sizeof(int) * numsSize);
    *dp = *nums;
    *(dp + 1) = max(*dp, *(nums + 1));
    for (int i = 2; i < numsSize; i++)
    {
        *(dp + i) = max(*(dp + i - 1), *(dp + i - 2) + *(nums + i));
    }
    return dp[numsSize - 1];
}

int deleteAndEarn(int *nums, int numsSize)
{
    int max_num = *nums;
    for (int i = 1; i < numsSize; i++)
    {
        max_num = max(max_num, *(nums + i));
    }
    int arr[max_num + 1];
    memset(arr, 0, sizeof(arr));
    for (int i = 0; i < numsSize; i++)
    {
        arr[*(nums + i)] += *(nums + i);
    }

    return rob(arr, max_num + 1);
}