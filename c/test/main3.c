#include <stdio.h>

int main(int argc, char const *argv[])
{
    int array[][2] = {{3, 4}, {11, 12}};
    printf("%p -- %p --%p %p %p\n", array + 1, &array + 1, array, array[0], &array[0][0]);
    return 0;
}
