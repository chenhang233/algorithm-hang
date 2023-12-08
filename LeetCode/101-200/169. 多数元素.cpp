class Solution
{
public:
    int majorityElement(vector<int> &nums)
    {
        int n = nums.size();
        int p = n / 2;
        cout << p << endl;
        unordered_map<int, int> m;
        for (int i = 0; i < n; i++)
        {
            if (nums[i] == 0)
            {
                m[nums[i]] = 1;
            }
            else
            {
                m[nums[i]]++;
                if (m[nums[i]] > p)
                    return nums[i];
            }
        }
        return 0;
    }
};