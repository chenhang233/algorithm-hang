char *toLowerCase(char *s)
{

    for (int i = 0;; i++)
    {
        char c = s[i];
        if (c == '\0')
            break;
        if (c >= 65 && c <= 90)
            s[i] |= 32;
    }
    return s;
}
