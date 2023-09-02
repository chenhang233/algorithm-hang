#include <stdio.h>
#include <stdlib.h>
#pragma once

typedef struct Node
{
    int intV;
    struct Node *next;
} Node;

typedef struct LinkedList
{
    Node *data;
    int len;
} LinkedList;

Node *create_node(int);
LinkedList *init();
int add_l(LinkedList *, int);
int remove_l(LinkedList *, Node *);
int update_l(LinkedList *, Node *, int v);
void forEach_l(LinkedList *);