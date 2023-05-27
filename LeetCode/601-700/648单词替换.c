#define MAX_STR_LEN 1024
#define EN 26

typedef struct Trie
{
    struct Trie *children[EN];
    bool isEnd
} Trie;

Trie *Tcreate()
{
    Trie *t = malloc(sizeof(Trie));
    t->isEnd = false;
    memset(t->children, 0, sizeof(t->children));
    return t;
}
void Tfree(Trie *root)
{
    for (int i = 0; i < EN; i++)
    {
        if (root->children[i])
        {
            Tfree(root->children[i]);
        }
    }
    free(root);
}

void Tinsert(Trie *t, char *word)
{
    if (!t)
        return;
    int len = strlen(word);
    for (int i = 0; i < len; i++)
    {
        int c = word[i] - 'a';
        if (!t->children[c])
        {
            t->children[c] = Tcreate();
        }
        t = t->children[c];
    }
    t->isEnd = true;
}

char *TfindRoot(Trie *t, const char *root)
{
    if (!t)
        return;
    char *ans = malloc(sizeof(char) * MAX_STR_LEN);
    int len = strlen(root);
    int pos = 0;
    for (int i = 0; i < len; i++)
    {
        int c = root[i] - 'a';
        if (t->isEnd)
        {
            ans[pos] = 0;
            return ans;
        }
        if (!t->children[c])
        {
            free(ans);
            return root;
        }
        ans[pos++] = root[i];
        t = t->children[c];
    }
    ans[pos] = 0;
    return ans;
}

char **Tsplit(char *sentence, char separator, int *returnSize)
{
    int pos = 0, i = 0, len = strlen(sentence);
    char **ans = malloc(sizeof(char *) * len);
    while (i < len)
    {
        while (i < len && sentence[i] == separator)
        {
            i++;
        }
        int start = i;
        while (i < len && sentence[i] != separator)
        {
            i++;
        }
        if (start < len)
        {
            ans[pos] = malloc(sizeof(char) * (i - start + 1));
            memcpy(ans[pos], sentence + start, sizeof(char) * (i - start));
            ans[pos][i - start] = 0;
            pos++;
        }
    }
    *returnSize = pos;
    return ans;
}

char *replaceWords(char **dictionary, int dictionarySize, char *sentence)
{
    Trie *t = Tcreate();
    for (int i = 0; i < dictionarySize; i++)
    {
        char *word = dictionary[i];
        Tinsert(t, word);
    }
    int size = 0, pos = 0;
    char *ans = malloc(sizeof(char) * strlen(sentence) + 2);
    char **list = Tsplit(sentence, ' ', &size);
    for (int i = 0; i < size; i++)
    {
        char *cur = TfindRoot(t, list[i]);
        pos += sprintf(ans + pos, "%s ", cur);
        free(list[i]);
        if (list[i] != cur)
            free(cur);
    }
    ans[pos - 1] = 0;
    Tfree(t);
    return ans;
}