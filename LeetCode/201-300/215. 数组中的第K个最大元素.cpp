class Solution {
public:
void maxHeap(vector<int>& a,int i,int size) {
    int l = i*2+1,r = i*2+2,largest = i;
    if (l < size && a[l] > a[largest]) {
        largest = l;
    }
    if (r < size && a[r] > a[largest]) {
        largest = r;
    }
    if (largest != i) {
        swap(a[i],a[largest]);
        maxHeap(a, largest,size);
    }
}

void buildMaxHeap(vector<int>& a,int size) {
    for (int i = size / 2;i >= 0; i--) {
        maxHeap(a,i,size);
    }
}
int findKthLargest(vector<int>& nums, int k) {
    int size = nums.size();
    buildMaxHeap(nums,size);  
   for (int i = nums.size() - 1; i >= nums.size() - k + 1; --i) {
            swap(nums[0], nums[i]);
            --size;
            maxHeap(nums, 0, size);
        }

    return nums[0];      
}
};