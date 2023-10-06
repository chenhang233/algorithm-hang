class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int temp = 0;
        for (int t : nums) {
            temp ^= t;
        }
        return temp;
    }
};