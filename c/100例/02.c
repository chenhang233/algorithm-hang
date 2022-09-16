// 题目：企业发放的奖金根据利润提成。
// 利润(I)低于或等于10万元时，奖金可提10%；
// 利润高于10万元，低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可提成7.5%；1
// 20万到40万之间时，高于20万元的部分，可提成5%；2
// 40万到60万之间时高于40万元的部分，可提成3%；3
// 60万到100万之间时，高于60万元的部分，可提成1.5%；4
// 高于100万元时，超过100万元的部分按1%提成。5
// 从键盘输入当月利润I，求应发放奖金总数？
// 程序分析：请利用数轴来分界，定位。注意定义时需把奖金定义成双精度浮点(double)型。

#include <stdio.h>
struct Obj
{
    double params0, params1, params2, params3, params4, params5;
};
int computed(int n, double i);

int main()
{
    double i;
    double current_profit;
    printf("请输入利润:\n");
    scanf("%lf", &i);
    if (i <= 100000)
    {
        current_profit = i * 0.1;
    }
    else if (i <= 200000)
    {
        current_profit = computed(1, i);
    }
    else if (i <= 400000)
    {
        current_profit = computed(2, i);
    }
    else if (i <= 600000)
    {
        current_profit = computed(3, i);
    }
    else if (i <= 1000000)
    {
        current_profit = computed(4, i);
    }
    else
    {
        current_profit = computed(5, i);
    }
    printf("提成为：bonus=%lf", current_profit);
    printf("\n");
}

int computed(int n, double i)
{
    struct Obj obj;
    double params0, params1, params2, params3, params4, params5;
    obj.params0 = 100000;
    obj.params1 = 0.075 * 100000;
    obj.params2 = params1 + 0.05 * 200000;
    obj.params3 = params2 + 0.03 * 200000;
    obj.params4 = params3 + 0.015 * 400000;
    obj.params5 = params4 + 0.01 * 400000;
    switch (n)
    {
    case 1:
        return obj.params0 + (i - obj.params0) * 0.75;
        break;
    case 2:
        return obj.params2 + (i - obj.params2) * 0.5;
        break;
    case 3:
        return obj.params3 + (i - obj.params3) * 0.3;
        break;
    case 4:
        return obj.params4 + (i - obj.params4) * 0.15;
        break;
    case 5:
        return obj.params5 + (i - obj.params5) * 0.1;
        break;

    default:
        break;
    }
}