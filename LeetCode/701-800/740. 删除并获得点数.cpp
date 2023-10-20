class Solution {
public:
    int deleteAndEarn(vector<int>& nums) {
        int n = nums.size();
        int max_num = nums[0];
        for (int i = 1; i < n; i++) {
            max_num = max(max_num,nums[i]);
        }
        int arr[max_num + 1];
        memset(arr, 0, sizeof(arr));
        for (int i = 0; i < n; i++) {
            arr[nums[i]] += nums[i];
        }
        int dp[max_num+1];
        dp[0] = arr[0];
        dp[1] = max(arr[0],arr[1]);
        for (int i = 2; i <= max_num;i++) {
            dp[i] = max(dp[i - 1], arr[i] + dp[i - 2]);
        }
        return dp[max_num];
    }
};