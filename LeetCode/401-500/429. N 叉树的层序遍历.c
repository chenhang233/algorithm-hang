/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     int numChildren;
 *     struct Node** children;
 * };
 */

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */

#define MAX_LEVE_SIZE 1000
#define MAX_NODE_SIZE 10000
int **levelOrder(struct Node *root, int *returnSize, int **returnColumnSizes)
{
    int **res = malloc(sizeof(int *) * MAX_LEVE_SIZE);
    *returnColumnSizes = malloc(sizeof(int) * MAX_LEVE_SIZE);
    if (root == NULL)
    {
        *returnSize = 0;
        return res;
    }
    struct Node **queue = malloc(sizeof(struct Node *) * MAX_NODE_SIZE);
    int t = 0, b = 0, l = 0;
    *(queue + b++) = root;
    while (t != b)
    {
        int c = b - t;
        *(res + l) = malloc(sizeof(int) * c);
        for (int i = 0; i < c; i++)
        {
            struct Node *cur = *(queue + t++);
            *(*(res + l) + i) = cur->val;
            for (int j = 0; j < cur->numChildren; j++)
            {
                *(queue + b++) = *(cur->children + j);
            }
        }
        *((*returnColumnSizes) + l++) = c;
    }
    *returnSize = l;
    free(queue);
    return res;
}