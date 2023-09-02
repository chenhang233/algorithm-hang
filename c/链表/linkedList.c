#include "linkedList.h"

Node *create_node(int v)
{
    Node *node = malloc(sizeof(Node));
    node->next = NULL;
    node->intV = v;
    return node;
}

LinkedList *init()
{
    LinkedList *list = malloc(sizeof(LinkedList));
    list->data = NULL;
    list->len = 0;
    return list;
}

int add_l(LinkedList *list, int v)
{
    if (list == NULL)
    {
        return 0;
    }
    Node *cur = list->data;
    Node *new_node = create_node(v);
    if (list->len == 0)
    {
        list->data = new_node;
        list->len++;
        return 1;
    }
    while (cur->next != NULL)
    {
        cur = cur->next;
    }
    cur->next = new_node;
    list->len++;
    return 1;
}

int remove_l(LinkedList *list, Node *node)
{
    if (list == NULL || list->len == 0)
    {
        return 0;
    }
    Node *cur = list->data, *prev = NULL;
    if (cur == node)
    {
        list->data = cur->next;
        list->len--;
        free(cur);
        return 1;
    }
    while (cur != NULL && cur != node)
    {
        prev = cur;
        cur = cur->next;
    }
    if (cur == node)
    {
        prev->next = cur->next;
        list->len--;
        free(cur);
        return 1;
    }
    return 0;
}

int update_l(LinkedList *list, Node *node, int v)
{
    if (list == NULL || list->len == 0)
    {
        return 0;
    }
    Node *cur = list->data;
    while (cur != NULL && cur != node)
    {
        cur = cur->next;
    }
    if (cur == node)
    {
        cur->intV = v;
        return 1;
    }
    return 0;
}

void forEach_l(LinkedList *list)
{
    if (list == NULL || list->len == 0)
    {
        return;
    }
    Node *cur = list->data;
    while (cur != NULL)
    {
        printf("cur=%d\n", cur->intV);
        cur = cur->next;
    }
}