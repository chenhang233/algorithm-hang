#include <stdio.h>

int main(int argc, char const *argv[])
{
    int a = 1;
    switch (a)
    {
        // printf("test\n"); statement will never be executed
    case 1:
        printf("11\n");
        break;

    default:
        break;
    }
    return 0;
}
