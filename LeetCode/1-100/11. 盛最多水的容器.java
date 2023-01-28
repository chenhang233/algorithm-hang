class Solution {
    public int maxArea(int[] height) {
 int left = 0, right = height.length - 1;
        int area = 0;
        while (left < right) {
            int len = right - left;
            int tail = height[left] > height[right] ? height[right--] : height[left++];
            if (len * tail > area) area = len * tail;
        }
        return  area;
    }
}