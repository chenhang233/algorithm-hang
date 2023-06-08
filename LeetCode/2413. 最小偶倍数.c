int smallestEvenMultiple(int n)
{
    for (int i = n;; i++)
    {
        if (i % 2 == 0 && i % n == 0)
            return i;
    }
}

int smallestEvenMultiple(int n)
{
    return n << (n & 1);
}