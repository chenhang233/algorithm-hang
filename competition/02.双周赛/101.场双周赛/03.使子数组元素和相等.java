class Solution {
    public long makeSubKSumEqual(int[] arr, int k) {
       int p1 = 0, p2 = k - 1, len = arr.length;
        HashMap<Integer, Integer> map = new HashMap<>();
        int[] sumArr = new int[len - p2];
        int index= 0;
        while (p2 < len) {
            int cur = 0;
            for (int i = 0; i < k; i++) {
                cur += arr[p1 + i];
            }
            sumArr[index++] = cur;
            map.put(cur, map.getOrDefault(cur, 0) + 1);
            p1++;
            p2++;
        }
        int max = 0,maxI = 0;
        for (Map.Entry<Integer, Integer> ie : map.entrySet()) {
            Integer value = ie.getValue();
            if (value > max) {
                max = value;
                maxI = ie.getKey();
            }
        }
        int res= 0;
        for (int i = 0; i < sumArr.length; i++) {
            res += Math.abs(sumArr[i] - maxI);
        }
        System.out.println(Arrays.toString(sumArr) +"--"+maxI);
        return res;
    }
}