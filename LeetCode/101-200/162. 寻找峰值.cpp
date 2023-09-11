class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int l = 0,r = nums.size() - 1;
        while(l < r) {
            int index = l + (r - l) / 2;
            if (nums[index] < nums[index+1]) {
                l = index+1;
            } else {
                r = index;
            }
        }
        return r;
    }
};