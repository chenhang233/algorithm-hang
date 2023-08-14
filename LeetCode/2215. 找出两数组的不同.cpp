class Solution {
public:
vector<vector<int>> findDifference(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> m1, m2;
        for (int i : nums1)
        {
            m1.insert(i);
        }
        for (int i : nums2)
        {
            m2.insert(i);
        }
        vector<vector<int>> answer(2);
        for (int i : m1)
        {
            if (!m2.count(i)) {
                answer[0].push_back(i);
            }
        }
        for (int i : m2)
        {
            if (!m1.count(i)) {
                answer[1].push_back(i);
            }
        }
        return answer;
    }
};