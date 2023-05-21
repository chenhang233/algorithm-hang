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

void dfs(struct Node *root, int *res, int *index)
{
    if (root == NULL)
        return;
    for (int i = 0; i < root->numChildren; i++)
    {
        dfs(root->children[i], res, index);
    }
    *(res + (*index)++) = root->val;
}

int *postorder(struct Node *root, int *returnSize)
{
    *returnSize = 0;
    int *res = malloc(sizeof(int) * MAX_SIZE);
    dfs(root, res, returnSize);
    return res;
}