class Solution
{
public:
    int removeDuplicates(vector<int> &nums)
    {
        if (nums.size() < 2)
            return 1;
        int l = 2;
        for (int i = 2; i < nums.size(); i++)
        {
            if (nums[l - 2] != nums[i])
            {
                nums[l++] = nums[i];
            }
        }
        return l;
    }
};