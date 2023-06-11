int subtractProductAndSum(int n)
{
    int temp1 = 1, temp2 = 0;
    while (n)
    {
        int c = n % 10;
        temp1 *= c;
        temp2 += c;
        n /= 10;
    }
    return temp1 - temp2;
}