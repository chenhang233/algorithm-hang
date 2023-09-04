#include "linkedList.h"

LinkedList *init()
{
    LinkedList *list = malloc(sizeof(LinkedList));
    list->data = NULL;
    list->len = 0;
    return list;
}

int add_l(LinkedList *list, void *data)
{
    if (list == NULL)
    {
        return 0;
    }
    Node *cur = list->data;
    Node *new_node = malloc(sizeof(Node));
    if (new_node == NULL)
    {
        printf("malloc error");
        exit(1);
    }
    new_node->next = NULL;
    new_node->data = data;
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

int remove_l(LinkedList *list, void *data)
{
    if (list == NULL || list->len == 0)
    {
        return 0;
    }
    Node *cur = list->data, *prev = NULL;
    if (cur->data == data)
    {
        list->data = cur->next;
        list->len--;
        free(cur);
        return 1;
    }
    while (cur != NULL && cur->data != data)
    {
        prev = cur;
        cur = cur->next;
    }
    if (cur->data == data)
    {
        prev->next = cur->next;
        list->len--;
        free(cur);
        return 1;
    }
    return 0;
}

int update_l(LinkedList *list, void *old_data, void *new_data)
{
    if (list == NULL || list->len == 0)
    {
        return 0;
    }
    Node *cur = list->data;
    while (cur != NULL && cur->data != old_data)
    {
        cur = cur->next;
    }
    if (cur->data == old_data)
    {
        cur->data = new_data;
        return 1;
    }
    return 0;
}

void forEach_l(LinkedList *list, void (*printFn)(void *))
{
    if (list == NULL || list->len == 0)
    {
        return;
    }
    Node *cur = list->data;
    while (cur != NULL)
    {
        printFn(cur->data);
        cur = cur->next;
    }
}