class Solution
{
public:
    int maxProfit(vector<int> &prices)
    {
        int min_p = 1e9, max_p = 0;
        for (int p : prices)
        {
            max_p = max(max_p, p - min_p);
            min_p = min(min_p, p);
        }
        return max_p;
    }
};