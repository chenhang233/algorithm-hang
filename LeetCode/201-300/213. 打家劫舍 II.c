int max(int a, int b)
{
    return a > b ? a : b;
}

int rob(int *nums, int numsSize)
{
    if (numsSize == 1)
        return *nums;
    int prev = 0, cur = 0, res = 0;
    for (int i = 0; i < numsSize - 1; i++)
    {
        int temp = max(prev + *(nums + i), cur);
        prev = cur;
        cur = temp;
    }
    res = cur;
    prev = 0;
    cur = 0;
    for (int i = 1; i < numsSize; i++)
    {
        int temp = max(prev + *(nums + i), cur);
        prev = cur;
        cur = temp;
    }
    return (max(res, cur));
}