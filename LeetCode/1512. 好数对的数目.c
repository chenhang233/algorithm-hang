int numIdenticalPairs(int *nums, int numsSize)
{
    int res = 0;
    int counts[101];
    memset(counts, 0, sizeof(int) * 101);
    for (int i = 0; i < numsSize; i++)
    {
        int c = nums[i];
        res += counts[c];
        counts[c]++;
    }
    return res;
}