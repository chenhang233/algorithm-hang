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
