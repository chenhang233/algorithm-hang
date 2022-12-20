#include <stdio.h>

int smallestValue(int n)
{
    int pre = 0;
    while (n != pre)
    {
        pre = n;
        int sum = 0;
        for (size_t i = 2; i * i <= n; ++i)
        {
            while (n % i == 0)
            {
                sum += i;
                n /= i;
            }
        }
        sum += n > 1 ? n : 0;
        n = sum;
    }
    return n;
}
