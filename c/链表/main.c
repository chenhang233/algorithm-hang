#include "linkedList.h"
int main(int argc, char const *argv[])
{
    LinkedList *list = init();
    add_l(list, 1);
    add_l(list, 2);
    add_l(list, 3);
    add_l(list, 1);
    forEach_l(list);
    remove_l(list, list->data);
    printf("--------------\n");
    forEach_l(list);
    update_l(list, list->data, 50);
    printf("--------------\n");
    forEach_l(list);

    return 0;
}
