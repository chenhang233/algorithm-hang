#define Absolute(a, b) (a - b >= 0 ? a - b : b - a)

int countGoodTriplets(int *arr, int arrSize, int a, int b, int c)
{
    int res = 0;
    for (int i = 0; i < arrSize; i++)
    {
        for (int j = i + 1; j < arrSize; j++)
        {
            for (int k = j + 1; k < arrSize; k++)
            {
                if (Absolute(arr[i], arr[j]) <= a && Absolute(arr[j], arr[k]) <= b && Absolute(arr[i], arr[k]) <= c)
                    res++;
            }
        }
    }
    return res;
}