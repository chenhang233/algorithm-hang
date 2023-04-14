class Solution {
    public int[] topKFrequent(int[] nums, int k) {
  HashMap<Integer,Integer> map = new HashMap<>();
        int[] ans = new int[k];
        for (int num : nums) {
            map.put(num,map.getOrDefault(num,0) + 1);
        }
        int max = 0;
        for (Map.Entry<Integer, Integer> ie : map.entrySet()) {
            max = Math.max(ie.getValue(),max);
        }
        System.out.println(max+"max");
        while (k > 0) {
            for (Map.Entry<Integer, Integer> ie : map.entrySet()) {
                if (ie.getValue() == max) {
                    ans[k - 1] = ie.getKey();
                    k--;
                }
            }
            max--;
        }
        return ans;
    }
}

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
     HashMap<Integer,Integer> map = new HashMap<>();
        int[] ans = new int[k];
        for (int num : nums) {
            map.put(num,map.getOrDefault(num,0) + 1);
        }
        int[] maxArr = new int[map.size()];
        int i = 0;
        for (Map.Entry<Integer, Integer> ie : map.entrySet()) {
            maxArr[i++] =  ie.getValue();
        }
        i = maxArr.length - 1;
        Arrays.sort(maxArr);
        while (k > 0) {
            for (Map.Entry<Integer, Integer> ie : map.entrySet()) {
                if (ie.getValue() == maxArr[i]) {
                                       if (k == 0) break;
                    ans[k - 1] = ie.getKey();
                    k--;
                    i--;
                }
            }
        }
        return ans;
    }
}