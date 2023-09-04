#include "linkedList.h"

void pr(void *data)
{
    int *a = data;
    printf("%d\n", *a);
}

void test(LinkedList *list)
{
    forEach_l(list, pr);
}

int main(int argc, char const *argv[])
{
    LinkedList *list = init();
    int a = 10, b = 20, c = 30, d = 50; // 正式环境要分配在堆上
    add_l(list, (void *)&a);
    add_l(list, (void *)&b);
    forEach_l(list, pr);
    remove_l(list, &a);
    forEach_l(list, pr);
    update_l(list, &b, &d);
    char e[] = "123";
    printf("e p : %p %p \n", e, &e);
    printf("e p : %c %c \n", *(e + 1), *(&e + 1));
    LinkedList *list2 = init();
    add_l(list2, (void *)e);
    return 0;
}
