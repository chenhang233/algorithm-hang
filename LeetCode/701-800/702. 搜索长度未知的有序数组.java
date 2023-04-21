/**
 * // This is ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface ArrayReader {
 *     public int get(int index) {}
 * }
 */

class Solution {
    public int search(ArrayReader reader, int target) {
   int l = 0,r = 1;
        while (reader.get(r) < target) {
            l = r;
            r *= 2;
        }
        while (l < r) {
            int mid = l + (r - l) /2;
            if (reader.get(mid) < target) {
                l = mid+1;
            } else {
                r = mid;
            }
        }
        return reader.get(l) == target ? l : -1;
    }
}