class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        int n = temperatures.size();
        vector<int> ans(n);
        stack<int> s;
        for (int i = 0; i < n; i++) {
            while(!s.empty() && temperatures[s.top()] < temperatures[i]) {
                int l = s.top();
                ans[l] = i - l;
                s.pop();
            }
            s.push(i);
        }
        return ans;
    }
};