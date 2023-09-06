#include <stdio.h>

int P1 = 10;
#define LED_SW 0
#define LED1 P1
#define LED2 2
#define LED3 3
#define LED4 4
#define LED5 5
#define LED6 5
#define LED7 7
#define LED8 8

int LED_MAP[] = {P1, LED2, LED3, LED4, LED5, LED6, LED7, LED8};
int LED_MAP_LEN = sizeof(LED_MAP) / sizeof(LED1);

void main()
{
    // 把所有的灯 0
    printf("LED_MAP_LEN= %d\n", LED_MAP_LEN);
    char i;
    for (i = 0; i < LED_MAP_LEN; i++)
    {
        LED_MAP[i] = 0;
        // delay_ms(200);
    }
}