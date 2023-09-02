class Solution {
public:
    long long maxScore(vector<int>& nums1, vector<int>& nums2, int k) {
                    int size = nums1.size();
            vector<pair<int,int>> olds;
            for (int i = 0; i < size; i++)
            {
                olds.push_back(pair<int,int>(-nums2[i],i));
            }
            sort(olds.begin(),olds.end());
            priority_queue<int,vector<int>,greater<int>> pq;
            long long sum = 0;
            for (int i = 0; i < k; i++)
            {
                int j = olds[i].second;
                sum += nums1[j];
                pq.push(nums1[j]);
            }
            long long ans = 0;
            ans = nums2[olds[k - 1].second] * sum;
            for (int i = k; i < size; i++)
            {
                int min = pq.top();pq.pop();
                sum -= min;
                int j = olds[i].second;
                sum += nums1[j];
                pq.push(nums1[j]);
                ans = max(ans, sum* nums2[j]);
            }
             
            return ans;
    }
};