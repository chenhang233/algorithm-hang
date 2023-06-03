#define MAXWORD 27         // 总共会有27种字符
#define MAXSENTENCELEN 100 // 字符串的最大长度
#define MAXRESULT 200      // 查询结果的最大数量
#define MAXRSULTSIZE 3     // 返回结果的最大数量

typedef struct TrieNode
{
    struct TrieNode *child[MAXWORD]; // 子节点数组
    char *sentence;                  // 如果次数不为零，存放字符串
    int val;                         // 次数
} trieNode;

// 初始化字典树节点
trieNode *creatTrieNode()
{
    trieNode *obj = (trieNode *)malloc(sizeof(trieNode));
    for (int i = 0; i < MAXWORD; i++)
    {
        obj->child[i] = NULL;
    }
    obj->sentence = NULL;
    obj->val = 0;
    return obj;
}

// 释放字典树节点内存
void freeTrieNode(trieNode *node)
{
    for (int i = 0; i < MAXWORD; i++)
    {
        if (node->child[i] != NULL)
        {
            freeTrieNode(node->child[i]);
        }
    }
    if (node->val != 0)
    {
        free(node->sentence);
    }
    free(node);
}

typedef struct
{
    trieNode *root;   // 字典树根节点
    char *curInsert;  // 当前输入的字符串
    int curInsertLen; // 当前输入字符串长度
    trieNode **cur;   // 当前搜索到的字典树节点
} AutocompleteSystem;

void autocompleteSystemFree(AutocompleteSystem *obj)
{
    freeTrieNode(obj->root);
    free(obj->curInsert);
    free(obj);
}

// 根据char获取数组下标
int getIndex(char chr)
{
    if (chr == ' ')
    {
        return MAXWORD - 1;
    }
    return chr - 'a';
}

// 插入单个字符串
void insertSentence(trieNode *root, char *sentence, int time)
{
    int len = strlen(sentence);
    trieNode *cur = root;
    for (int i = 0; i < len; i++)
    {
        int index = getIndex(sentence[i]);
        if (cur->child[index] == NULL)
        {
            trieNode *newNode = creatTrieNode();
            cur->child[index] = newNode;
            cur = cur->child[index];
        }
        else
        {
            cur = cur->child[index];
        }
    }
    if (cur->val == 0)
    {
        // 之前没有这条数据
        cur->sentence = (char *)calloc(strlen(sentence) + 1, sizeof(char));
        strcpy(cur->sentence, sentence);
        cur->val = time;
    }
    else
    {
        cur->val++;
    }
}

AutocompleteSystem *autocompleteSystemCreate(char **sentences, int sentencesSize, int *times, int timesSize)
{
    AutocompleteSystem *obj = (AutocompleteSystem *)malloc(sizeof(AutocompleteSystem));
    obj->root = creatTrieNode();
    for (int i = 0; i < sentencesSize; i++)
    {
        insertSentence(obj->root, sentences[i], times[i]);
    }
    obj->curInsertLen = 0;
    obj->curInsert = (char *)calloc(MAXSENTENCELEN + 1, sizeof(char));
    obj->cur = &obj->root;
    return obj;
}

// 在当前节点基础上搜寻所有字符串
void findAllResult(trieNode *searchList[MAXRESULT], trieNode *node, int *resultLen)
{
    if (node == NULL)
    {
        return;
    }
    if (node->val != 0)
    {
        trieNode *newResult = creatTrieNode();
        newResult->val = node->val;
        newResult->sentence = (char *)calloc(MAXSENTENCELEN + 1, sizeof(char));
        strcpy(newResult->sentence, node->sentence);
        searchList[(*resultLen)++] = newResult;
    }
    for (int i = 0; i < MAXWORD; i++)
    {
        if (node->child[i] == NULL)
        {
            continue;
        }
        findAllResult(searchList, node->child[i], resultLen);
    }
}
// 对于字典树节点排序条件
int cmp(const trieNode **aa, const trieNode **bb)
{
    trieNode *a = (trieNode *)*aa;
    trieNode *b = (trieNode *)*bb;
    if (a->val != b->val)
    {
        return b->val - a->val;
    }
    return strcmp(a->sentence, b->sentence);
}

// 根据搜寻结果找到三个最终结果
char **getTop3Result(trieNode *searchList[MAXRESULT], int listLen, int *retSize)
{
    if (listLen == 0)
    {
        return NULL;
    }
    // 对于找到的结果进行排序
    qsort(searchList, listLen, sizeof(trieNode *), cmp);
    *retSize = listLen;
    if (listLen > MAXRSULTSIZE)
    {
        // 如果有超过三个结果，则只选取三个结果
        *retSize = MAXRSULTSIZE;
    }
    char **result = calloc(*retSize, sizeof(char *));
    // 复制结果
    for (int i = 0; i < *retSize; i++)
    {
        result[i] = (char *)calloc(strlen(searchList[i]->sentence) + 1, sizeof(char));
        strcpy(result[i], searchList[i]->sentence);
    }
    for (int i = 0; i < listLen; i++)
    {
        freeTrieNode(searchList[i]);
    }
    return result;
}
char **autocompleteSystemInput(AutocompleteSystem *obj, char c, int *retSize)
{
    if (c == '#')
    {
        obj->curInsert[(obj->curInsertLen)++] = '\0'; // 字符串结束符
        obj->curInsertLen = 0;
        int time = obj->cur == NULL ? 1 : (*obj->cur)->val + 1;
        insertSentence(obj->root, obj->curInsert, time);
        obj->cur = &(obj->root);
        return NULL;
    }
    obj->curInsert[obj->curInsertLen++] = c;
    if (obj->cur == NULL)
    {
        // 之前已处于新字符串的状态
        return NULL;
    }
    int index = getIndex(c);
    if ((*obj->cur)->child[index] == NULL)
    {
        // 找不到对应节点则说明是新的字符串
        obj->cur = NULL;
        return NULL;
    }
    obj->cur = &((*obj->cur)->child[index]);
    trieNode *searchList[MAXRESULT];
    int listLen = 0;
    findAllResult(searchList, *obj->cur, &listLen);
    return getTop3Result(searchList, listLen, retSize);
}

/**
 * Your AutocompleteSystem struct will be instantiated and called as such:
 * AutocompleteSystem* obj = autocompleteSystemCreate(sentences, sentencesSize, times, timesSize);
 * char ** param_1 = autocompleteSystemInput(obj, c, retSize);

 * autocompleteSystemFree(obj);
*/
