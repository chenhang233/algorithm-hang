    int[] temp;
    int[] tempIndex;
    int[] index;
    int[] answer;

    public List<Integer> countSmaller(int[] nums) {
        int n = nums.length;
        temp = new int[n];
        tempIndex = new int[n];
        index = new int[n];
        answer = new int[n];
        for (int i = 0; i < n; i++) {
            index[i] = i;
        }
        mergeSort(nums,0,n - 1);
        ArrayList<Integer> list= new ArrayList<>();
        for (int i : answer) {
            list.add(i);
        }
        return list;
    }

    public void mergeSort(int[]  nums,int left,int right) {
        if (left>= right) return;
        int mid = (left + right) >> 1;
        mergeSort(nums,left, mid);
        mergeSort(nums,mid + 1, right);
        merge(nums,left,mid,right);
    }
    public void merge(int[] nums,int left,int mid,int right) {
        int i = left,j = mid + 1,p = left;
        while (i <= mid && j <= right) {
            if (nums[i] <= nums[j]) {
                temp[p] = nums[i];
                tempIndex[p] = index[i];
                answer[index[i]] +=  (j - mid - 1);
                p++;
                i++;
            } else {
                temp[p] = nums[j];
                tempIndex[p] = index[j];
                p++;
                j++;
            }
        }
        while (i <= mid) {
            temp[p] = nums[i];
            tempIndex[p] = index[i];
            answer[index[i]] += (j - mid -1);
            i++;
            p++;
        }
        while (j <= right) {
            temp[p] = nums[j];
            tempIndex[p] = index[j];
            j++;
            p++;
        }
        for (int k = left; k <= right; k++) {
            index[k] = tempIndex[k];
            nums[k] = temp[k];
        }
    }