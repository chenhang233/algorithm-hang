class Solution {
      public int reversePairs(int[] nums) {
        if (nums.length <= 1) return 0;
        return reverseMerge(nums,0, nums.length - 1);
    }

    public int reverseMerge(int[] nums,int left, int right) {
        if (left >= right) return 0;
        int mid = (left + right) >> 1;
        int t1 = reverseMerge(nums,left, mid);
        int t2 = reverseMerge(nums,mid + 1, right);
        int res = t1 + t2;
        int i = left;
        int j = mid + 1;
        while (i <= mid) {
            while (j <= right &&(long) nums[i] > 2 *(long) nums[j]) {
                j++;
            }
            res += (j - mid - 1);
            i++;
        }
        int[] temp = new int[right - left + 1];
        int p1 = left,p2 = mid + 1, p3 = 0;
        while (p1 <= mid || p2 <= right) {
            if (p1 > mid) {
                temp[p3++] = nums[p2++];
            } else if (p2 > right) {
                temp[p3++] = nums[p1++];
            } else {
                if (nums[p1] < nums[p2]) {
                    temp[p3++] = nums[p1++];
                } else {
                    temp[p3++] = nums[p2++];
                }
            }
        }
        for (int k = 0; k < temp.length; k++) {
             nums[k + left]  = temp[k];
        }
        return res;
    }
}