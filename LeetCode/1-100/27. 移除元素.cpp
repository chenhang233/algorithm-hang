class Solution
{
public:
    int removeElement(vector<int> &nums, int val)
    {
        int left = 0, i = 0;
        while (left < nums.size())
        {
            if (nums[left] == val)
            {
                continue;
            }
            nums[i++] = nums[left++];
        }
    }
};