class Solution {
public:
    long long maximumSubarraySum(vector<int>& nums, int K) {
        int n = nums.size();
        // 维护元素出现次数
        unordered_map<int, int> cnt;
        // 维护元素的和
        long long sm = 0;
        // 用第一个子数组进行初始化
        for (int i = 0; i < K; i++) cnt[nums[i]]++, sm += nums[i];

        long long ans = 0;
        // 通过滑动窗口的方式枚举所有长度为 k 的子数组
        for (int i = 0, j = K - 1; ; i++, j++) {
            // 检查子数组中是否有 k 种元素
            if (cnt.size() == K) ans = max(ans, sm);
            // 枚举完成，退出
            if (j + 1 == n) break;
            // 滑动窗口，删除 nums[i]，添加 nums[j + 1]
            auto it = cnt.find(nums[i]);
            if (it->second == 1) cnt.erase(it);
            else it->second -= 1;
            cnt[nums[j + 1]]++;
            sm += nums[j + 1] - nums[i];
        }
        return ans;
    }
};
