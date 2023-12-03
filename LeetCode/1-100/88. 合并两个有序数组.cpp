class Solution
{
public:
    void merge(vector<int> &nums1, int m, vector<int> &nums2, int n)
    {
        int i = nums1.size(), j = m, k = 0;
        while (j < i)
        {
            nums1[j++] = nums2[k++];
        }
        for (int q = 1; q < i; q++)
        {
            int temp = nums1[q];
            int p = q;
            while (p > 0 && temp < nums1[p - 1])
            {
                nums1[p] = nums1[p - 1];
                p--;
            }
            nums1[p] = temp;
        }
    }
};