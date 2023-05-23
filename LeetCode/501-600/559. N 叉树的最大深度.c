/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     int numChildren;
 *     struct Node** children;
 * };
 */

int dfs(struct Node *root, int level)
{
    int c = level;
    for (int i = 0; i < root->numChildren; i++)
    {
        int t = dfs(root->children[i], level + 1);
        c = t > c ? t : c;
    }
    return c;
}
int maxDepth(struct Node *root)
{
    if (root == NULL)
        return 0;
    return dfs(root, 1);
}

/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     int numChildren;
 *     struct Node** children;
 * };
 */

#define MAX_NODE_SIZE 10000
int maxDepth(struct Node *root)
{
    if (root == NULL)
        return 0;
    struct Node **queue = malloc(sizeof(struct Node *) * MAX_NODE_SIZE);
    int head = 0, tail = 0, level = 0;
    queue[tail++] = root;
    while (head != tail)
    {
        int len = tail - head;
        for (int i = 0; i < len; i++)
        {
            struct Node *cur = queue[head++];
            for (int j = 0; j < cur->numChildren; j++)
            {
                queue[tail++] = cur->children[j];
            }
        }
        level++;
    }
    return level;
}