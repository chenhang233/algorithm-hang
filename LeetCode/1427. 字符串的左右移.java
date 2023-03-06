class Solution {
    public String stringShift(String s, int[][] shift) {
 int lCount = 0,rCount = 0,type = 0,count = 0;
        int len = s.length();
        for (int[] ints : shift) {
             int direction = ints[0];
             int c = ints[1];
             if (direction == 0) lCount += c;
             else rCount += c;
        }
        if ( lCount == rCount) return s;
        if (lCount > rCount) {
            count = lCount - rCount;
        } else {
            count = rCount - lCount;
            type = 1;
        }
        count = count % len;
        System.out.println(count + "--" + type);
            System.out.println(s.substring(len - count) +"--");
        System.out.println(s.substring(0,count + 1));
             return type == 0? s.substring(count) + s.substring(0,count) : s.substring(len - count) + s.substring(0,len - count);

    }

      public String stringShift(String s, int[][] shift) {
          int x = 0;
        int len = s.length();
        for (int[] ints : shift) {
            if (ints[0] == 0) {
                x -= ints[1];
            } else {
                x += ints[1];
            }
        }
        x %= len;
        if (x == 0) return s;
        else if (x < 0) {
            return s.substring(-x) + s.substring(0,-x);
        } else  {
            return s.substring(len - x) + s.substring(0, len - x);
        }
    }
}