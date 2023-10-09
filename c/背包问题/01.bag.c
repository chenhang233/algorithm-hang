#include "stdio.h"

int solution(int *values, int *weights, int capacity, int v_len)
{
    int dp[v_len][capacity];
    // dp[当前可选重量][当前背包容量] = max(dp[上一次可选重量][当前背包容量],dp[上一次可选重量][当前背包容量-要选的重量] + values[要选的重量索引])
    for (int i = 0; i <= v_len; i++)
    {
        for (int j = 0; j <= capacity; j++)
        {
            if (i == 0 || j == 0)
            {
                dp[i][j] = 0;
            }
            else if (j >= weights[i - 1])
            {
                int a1 = dp[i - 1][j];
                int a2 = dp[i - 1][j - weights[i - 1]] + values[i - 1];
                dp[i][j] = a1 > a2 ? a1 : a2;
            }
            else
            {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[v_len][capacity];
}

int main(int argc, char const *argv[])
{

    int values[] = {3, 4, 5, 10};
    int weights[] = {2, 3, 4, 5};
    int capacity = 5;
    printf("v: %d", solution(values, weights, capacity, sizeof(values) / sizeof(values[0])));
    return 0;
}
