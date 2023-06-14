bool isVowel(char c)
{
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
    {
        return true;
    }
    return false;
}

int vowelStrings(char **words, int wordsSize, int left, int right)
{
    int res = 0;
    for (int i = left; i <= right; i++)
    {
        char *str = words[i];
        int len = strlen(str);
        if (isVowel(str[0]) && isVowel(str[len - 1]))
            res++;
    }
    return res;
}