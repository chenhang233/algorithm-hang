class Solution {
public:
    int rob(vector<int>& nums) {
        int prev = 0,cur = 0;
        for (int i = 0; i < nums.size(); i++) {
            int temp = max(nums[i] + prev, cur);
            prev = cur;
            cur = temp;
        }
        return cur;
    }
};