class Solution
{
public:
    int removeDuplicates(vector<int> &nums)
    {
        int l = 0;
        for (int i = 0; i < nums.size(); i++)
        {
            if (nums[i] > nums[l])
            {
                nums[++l] = nums[i];
            }
        }
        return l + 1;
    }
};