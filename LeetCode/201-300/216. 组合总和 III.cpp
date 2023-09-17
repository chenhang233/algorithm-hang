class Solution {
public:
    vector<vector<int>> res;
    vector<int> path;
    vector<vector<int>> combinationSum3(int k, int n) {
            for (int mask = 0; mask < (1 << 9); mask++) {
                if (next(mask,k,n)) {
                    res.emplace_back(path);
                }
            }
            return res;
    }
    bool next(int mask,int k,int n) {
        path.clear();
        for (int i = 0; i < 9;i++) 
        {
            if ((1 << i) & mask) {
                path.push_back(1 + i);
            }
        }
        return path.size() == k && accumulate(path.begin(),path.end(),0) == n;
    }
};
// 1 0000 0000
// 0 0000 1110