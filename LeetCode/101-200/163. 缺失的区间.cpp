class Solution
{
public:
    vector<vector<int>> findMissingRanges(vector<int> &nums, int lower, int upper)
    {
        vector<vector<int>> ans;
        int len = nums.size();
        if (!len)
        {
            vector<int> tmp;
            tmp.push_back(lower);
            tmp.push_back(upper);
            ans.push_back(tmp);
            return ans;
        };
        if (nums[0] != lower)
        {
            vector<int> tmp;
            tmp.push_back(lower);
            tmp.push_back(nums[0] - 1);
            ans.push_back(tmp);
        }
        for (int i = 1; i < len; i++)
        {
            if (nums[i] != nums[i - 1] + 1)
            {
                vector<int> tmp;
                tmp.push_back(nums[i - 1] + 1);
                tmp.push_back(nums[i] - 1);
                ans.push_back(tmp);
            }
        }
        if (nums[len - 1] != upper)
        {
            vector<int> tmp;
            tmp.push_back(nums[len - 1] + 1);
            tmp.push_back(upper);
            ans.push_back(tmp);
        }
        return ans;
    }
};

class Solution
{
public:
    vector<vector<int>> findMissingRanges(vector<int> &nums, int lower, int upper)
    {
        vector<vector<int>> ans;
        nums.insert(nums.begin(), lower - 1);
        nums.push_back(upper + 1);
        int len = nums.size();
        for (int i = 1; i < len; i++)
        {
            if (nums[i] != nums[i - 1] + 1)
            {
                ans.push_back({nums[i - 1] + 1, nums[i] - 1});
            }
        }
        return ans;
    }
};