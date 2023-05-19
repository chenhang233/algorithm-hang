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


