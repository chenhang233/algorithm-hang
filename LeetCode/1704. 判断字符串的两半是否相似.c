#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool halvesAreAlike(char *s)
{
    int sLen = strlen(s);
    int sLen2 = sLen / 2;
    int sum1 = 0, sum2 = 0;
    char *p = "aeiouAEIOU";
    for (int i = 0; i < sLen2; i++)
    {
        if (strchr(p, s[i]))
            sum1++;
        if (strchr(p, s[sLen2 + i]))
            sum2++;
    }
    return sum1 == sum2;
}