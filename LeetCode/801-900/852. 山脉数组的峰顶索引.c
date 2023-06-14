int peakIndexInMountainArray(int *arr, int arrSize)
{
    int l = 0, r = arrSize - 1;
    while (l < r)
    {
        int index = l + (r - l) / 2;
        if (arr[index] >= arr[index - 1])
        {
            l = index + 1;
        }
        else
        {
            r = index;
        }
    }
    return r - 1;
}