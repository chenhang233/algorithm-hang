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
        int rob(vector<int>& nums) {
        int prev = 0,cur = 0,ans = 0;
        int n = nums.size();
        for (int i = 0; i < n; i++) {
            ans = max(nums[i] + prev, cur);
            prev = max(prev,cur);
            cur = ans;
        }
        return ans;
    }
};