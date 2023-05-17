#include <stdlib.h>

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

int rob(int *nums, int numsSize)
{
    int prev = 0, cur = 0;
    for (int i = 0; i < numsSize; i++)
    {
        int temp = max(prev + *(nums + i), cur);
        prev = cur;
        cur = temp;
    }
    return cur;
}