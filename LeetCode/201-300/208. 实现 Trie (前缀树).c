
typedef struct Trie
{
    struct Trie *children[26];
    bool isEnd;
} Trie;

Trie *trieCreate()
{
    Trie *t = malloc(sizeof(Trie));
    memset(t->children, 0, sizeof(t->children));
    t->isEnd = false;
    return t;
}

void trieInsert(Trie *obj, char *word)
{
    int n = strlen(word);
    for (int i = 0; i < n; i++)
    {
        char c = word[i] - 'a';
        if (obj->children[c] == NULL)
        {
            obj->children[c] = trieCreate();
        }
        obj = obj->children[c];
    }
    obj->isEnd = true;
}

bool trieSearch(Trie *obj, char *word)
{
    int n = strlen(word);
    for (int i = 0; i < n; i++)
    {
        char c = word[i] - 'a';
        if (obj->children[c] == NULL)
        {
            return false;
        }
        obj = obj->children[c];
    }
    return obj->isEnd;
}

bool trieStartsWith(Trie *obj, char *prefix)
{
    int n = strlen(prefix);
    for (int i = 0; i < n; i++)
    {
        char c = prefix[i] - 'a';
        if (obj->children[c] == NULL)
        {
            return false;
        }
        obj = obj->children[c];
    }
    return true;
}

void trieFree(Trie *obj)
{
    for (int i = 0; i < 26; i++)
    {
        if (obj->children[i])
        {
            trieFree(obj->children[i]);
        }
    }
    free(obj);
}

/**
 * Your Trie struct will be instantiated and called as such:
 * Trie* obj = trieCreate();
 * trieInsert(obj, word);

 * bool param_2 = trieSearch(obj, word);

 * bool param_3 = trieStartsWith(obj, prefix);

 * trieFree(obj);
*/