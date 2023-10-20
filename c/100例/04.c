#include <stdio.h>
#include <string.h>
#include <math.h>

int max(int a, int b)
{
    return a > b ? a : b;
}

int deleteAndEarn(int *nums, int numsSize)
{
    printf("numsSize=%d\n", numsSize);
    int max_num = *nums;
    for (int i = 1; i < numsSize; i++)
    {
        max_num = max(max_num, *(nums + i));
    }
    printf("max_num=%d\n", max_num);

    int arr[max_num + 1];
    memset(arr, 0, sizeof(arr));

    for (int i = 0; i < numsSize; i++)
    {
        arr[*(nums + i)] += *(nums + i);
    }

    for (int i = 0; i < max_num + 1; i++)
    {
        printf("arr[i]=%d \n", arr[i]);
    }
    // return rob(arr, max_num + 1);
    return 0;
}

int main(int argc, char const *argv[])
{
    int arr[] = {2, 2, 3, 3, 3, 3, 4};
    deleteAndEarn(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}
