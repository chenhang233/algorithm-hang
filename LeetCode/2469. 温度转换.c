#include <stdlib.h>

double *convertTemperature(double celsius, int *returnSize)
{
    *returnSize = 2;
    double *res = malloc(sizeof(double) * 2);
    *res = celsius + 273.15;
    *(res + 1) = celsius * 1.80 + 32.00;
    return res;
}