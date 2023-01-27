class Solution {
    public String reverseVowels(String s) {
 char[] cArr = s.toCharArray();
        int left = 0,right = cArr.length -1;
        while (left <right) {
            while (left < right
                    &&
                    !((cArr[left] == 'a')||(cArr[left] == 'e')||(cArr[left] == 'i')
                    ||(cArr[left] == 'o')||(cArr[left] == 'u')||(cArr[left] == 'A')||(cArr[left] == 'E')||(cArr[left] == 'I')
                    ||(cArr[left] == 'O')||(cArr[left] == 'U'))) {
                left++;
            }
            while (left < right
                    &&
                    !((cArr[right] == 'a')||(cArr[right] == 'e')||(cArr[right] == 'i')
                    ||(cArr[right] == 'o')||(cArr[right] == 'u')||(cArr[right] == 'A')||(cArr[right] == 'E')||(cArr[right] == 'I')
                    ||(cArr[right] == 'O')||(cArr[right] == 'U'))) {
                right--;
            }
            char temp = cArr[left];
            cArr[left] = cArr[right];
            cArr[right] = temp;
            left++;
            right--;
        }
        return new String(cArr);
    }
}