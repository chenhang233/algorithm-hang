#include <stdio.h>
int countConsistentStrings(char *allowed, char **words, int wordsSize)
{
    int mask = 0;
    for (int i = 0; allowed[i] != '\0'; i++)
    {
        mask |= 1 << (allowed[i] - 'a');
    }
    int count = 0;
    for (int i = 0; i < wordsSize; i++)
    {
        int mask1 = 0;
        for (int j = 0; words[i][j] != '\0'; j++)
        {
            mask1 |= 1 << (words[i][j] - 'a');
        }
        if ((mask1 | mask) == mask)
            count++;
    }
    return count;
}
/*
0000 01
如果是b b -a = 1  左移 0000 01 << 0000 01 0000 01
如果是c c - a  = 2 左移 0000 01 << 0000 10 0000 11
 */

char *a = "ab";
char *b[] = {"ad", "bd", "aaab", "baa", "badab"};
countConsistentStrings(a, b);