#include <stdio.h>
#include <stdlib.h>
#pragma once

typedef struct Node
{
    void *data;
    struct Node *next;
} Node;

typedef struct LinkedList
{
    Node *data;
    int len;
} LinkedList;

LinkedList *init();
int add_l(LinkedList *, void *);
int remove_l(LinkedList *, void *);
int update_l(LinkedList *, void *, void *);
void forEach_l(LinkedList *, void (*printFn)(void *));