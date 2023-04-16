class Solution {
    public int addMinimum(String word) {
           int len = word.length(),res = 0;
        for (int i = 0; i < len; i++) {
            char c = word.charAt(i);
            int j = i + 1;
            if (c == 'a') {
                if (j < len && word.charAt(j) == 'b') {
                    j++;
                    if (j < len && word.charAt(j) == 'c') {
                        i += 2;
                        continue;
                    }
                    i += 1;
                    res+= 1;
                    continue;
                }
                if (j < len && word.charAt(j) == 'c') {
                    i+=1;
                    res+=1;
                    continue;
                }
                res+= 2;
            } else if (c == 'b') {
                if (j < len && word.charAt(j) == 'c') {
                    i += 1;
                    res += 1;
                    continue;
                }
                res += 2;
            } else {
                res += 2;
            }
        }
        return  res;
    }
}