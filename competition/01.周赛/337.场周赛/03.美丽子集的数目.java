// class Solution {
//   ArrayList<Integer>[] lists;
//     int n;
//     public int beautifulSubsets(int[] nums, int k) {
//         ArrayList<Integer> list = new ArrayList<>();
//         for (int num : nums) {
//             list.add(num);
//         }
//                 lists = new ArrayList[nums.length];
//         dfs(0, list);
//         for (ArrayList<Integer> integers : lists) {
//             System.out.println(integers.toString());
//         }
//         return 0;
//     }

//     public void dfs(int i, ArrayList<Integer> list) {
//         if (i == list.size()) {
//             ArrayList<Integer> l = new ArrayList<>();
//             for (Integer in : list) {
//                 l.add(in);
//             }
//             lists[n++] = l;
//         }
//         dfs(i + 1, list);
//         list.remove(list.size() - 1);
//         dfs(i + 1, list);
//     }
// }

class Solution {
    public int[] nums, cnt;
    public int k,ans = -1;
    public int beautifulSubsets(int[] nums, int k) {
        this.k = k;
        this.nums = nums;
        this.cnt = new int[k * 2 + 1001];
        dfs(0);
        return ans;
    }
    public void dfs(int i) {
        if (i == this.nums.length) {
            ans++;
            return;
        }
        dfs(i + 1);
        int x = nums[i] + k;
        if (cnt[x - k] == 0 && cnt[x + k] == 0) {
            cnt[x]++;
            dfs(i +1);
            cnt[x]--;
        }
    }
}