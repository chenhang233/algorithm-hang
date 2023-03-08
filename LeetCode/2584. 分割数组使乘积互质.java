class Solution {
    public int findValidSplit(int[] nums) {
 int n = nums.length;
        boolean[] flag = new boolean[1001];
        ArrayList<Integer> prime = new ArrayList<>();
        for (int i = 2; i * i <= 1000; i++) {
            if (!flag[i]) {
                for (int j = i * 2; j <= 1000; j += i) {
                    flag[j] = true;
                }
            }
        }
                System.out.println(Arrays.toString(flag));

        for (int i = 2; i <= 1000; i++) {
            if (!flag[i]) prime.add(i);
        }
        HashMap<Integer, Integer> r = new HashMap<>();
        ArrayList<Integer>[] arr = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            int num = nums[i];
            arr[i] = new ArrayList<>();
            for (Integer p : prime) {
                if (num % p != 0) continue;
                arr[i].add(p);
                r.put(p,r.getOrDefault(p,0) + 1);
                while (num % p == 0) num /= p;
            }
            if (num > 1) {
                arr[i].add(num);
                r.put(num,r.getOrDefault(num,0) + 1);
            }
        }
        HashMap<Integer,Integer> l = new HashMap<>();
        for (int i = 0; i < n - 1; i++) {
            for (Integer j : arr[i]) {
                l.put(j,l.getOrDefault(j,0) + 1);
                r.put(j, r.get(j) - 1);
                if (r.get(j) == 0) r.remove(j);
            }
            boolean valid = true;
            for (Integer k : l.keySet()) {
                if (r.containsKey(k)) {
                    valid = false;
                    break;
                }
            }
            if (valid) return i;
        }
        return -1;
    }
}