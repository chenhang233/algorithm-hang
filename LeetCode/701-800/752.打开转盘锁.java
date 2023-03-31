class Solution {
    public int openLock(String[] deadends, String target) {
        if ("0000".equals(target)) return 0;
        HashSet<String> dd = new HashSet<>();
        for (String deadend : deadends) {
            dd.add(deadend);
        }
        if (dd.contains("0000")) return -1;
        HashSet<String> visited = new HashSet<>();
        Queue<String> queue = new LinkedList<>();
        queue.add("0000");
        visited.add("0000");
        int step = 0;
        while (!queue.isEmpty()) {
            step++;
            int length = queue.size();
            for (int i = 0; i < length; i++) {
                String cur = queue.poll();
                List<String> nextStatus = get(cur);
                for (String status : nextStatus) {
                    if (!dd.contains(status) && !visited.contains(status)) {
                        if (status.equals( target)) return step;
                        queue.add(status);
                        visited.add(status);
                    }
                }
            }
        }
        return -1;
    }
    public char add(char i) {
        return i == '9' ? '0' : (char)(i+1);
    }
    public char sub(char i) {
        return i == '0' ? '9' : (char) (i - 1);
    }
    public List<String> get(String cur) {
        char[] chars = cur.toCharArray();
        List<String> list = new ArrayList<>();
        for (int i = 0; i < chars.length; i++) {
            char n  = chars[i];
            chars[i] = add(n);
            list.add(new String(chars));
            chars[i] = sub(n);
            list.add(new String(chars));
            chars[i] = n;
        }
        return list;
    }
}