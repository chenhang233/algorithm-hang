
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

int *shuffle(int *nums, int numsSize, int n, int *returnSize)
{
    *returnSize = numsSize;
    int *res = malloc(sizeof(int) * numsSize);
    for (int i = 0, j = n, k = 0; i < n; i++, j++)
    {
        res[k++] = nums[i];
        res[k++] = nums[j];
    }
    return res;
}