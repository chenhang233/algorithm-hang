#include <climits>
char *minWindow(char *s, char *t)
{
    int map[256] = {0};
    int slen = strlen(s), tlen = strlen(t);
    int start = 0, result = INT_MAX;
    for (int i = 0; i < tlen; i++)
    {
        map[t[i]]++;
    }
    for (int L = 0, R = 0; R < slen; R++)
    {
        if (map[s[R]]-- > 0)
        {
            tlen--;
        }
        while (tlen == 0)
        {
            int sub_len = R + 1 - L;
            if (sub_len < result)
            {
                result = sub_len;
                start = L;
            }
            if (++map[s[L]] > 0)
            {
                tlen++;
            }
            L++;
        }
    }
    if (result != INT_MAX)
    {
        char *buf = (char *)malloc(sizeof(char) * (result + 1));
        *buf = '\0';
        strncat(buf, s + start, result);
        return buf;
    }
    return "";
}