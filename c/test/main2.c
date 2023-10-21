#include <stdio.h>

void test1()
{
    printf("1");
}
void test2()
{
    printf("2");
}

int main(int argc, char const *argv[])
{
    1 < 2 ? test1() : test2();
    return 0;
}
