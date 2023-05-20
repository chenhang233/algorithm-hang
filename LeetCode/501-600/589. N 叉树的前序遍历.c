/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     int numChildren;
 *     struct Node** children;
 * };
 */

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

#define MAX_NODE_SIZE 10000

void *dfs(struct Node *root, int *res, int *p)
{
    if (root == NULL)
        return;
    res[(*p)++] = root->val;
    for (int i = 0; i < root->numChildren; i++)
    {
        dfs(*(root->children + i), res, p);
    }
}

// 中 左 右
int *preorder(struct Node *root, int *returnSize)
{
    int *res = malloc(sizeof(int) * MAX_NODE_SIZE);
    int p = 0;
    dfs(root, res, &p);
    *returnSize = p;
    return res;
}



/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     int numChildren;
 *     struct Node** children;
 * };
 */

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#define MAX_SIZE 10000
int *preorder(struct Node *root, int *returnSize)
{
    *returnSize = 0;
    if (root == NULL)
        return NULL;
    int *res = malloc(sizeof(int) * MAX_SIZE);
    struct Node **stack = malloc(sizeof(struct Node *) * MAX_SIZE);
    int p = 0;
    stack[p] = root;
    while (p >= 0)
    {
        struct Node *cur = stack[p--];
        res[(*returnSize)++] = cur->val;
        for (int i = cur->numChildren - 1; i >= 0; i--)
        {
            stack[++p] = cur->children[i];
        }
    }
    return res;
}



