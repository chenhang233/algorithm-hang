int maxScore(char *s)
{
    int l1 = 0, l2 = 0, i = 0;
    while (s[i] != '\0')
    {
        s[i] == '0' ? l1++ : l2++;
        i++;
    }
    i = 0;
    int l3 = 0, l4 = 0;
    int res = 0;
    while (s[i] != '\0' && s[i + 1] != '\0')
    {
        s[i] == '0' ? l3++ : l4++;
        int t = l3 + l2 - l4;
        if (t > res)
            res = t;
        i++;
    }
    return res;
}