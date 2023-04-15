/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
             int left = 0;
        int right = n;
        int flag;
        int mid = 0;
        while(left<right){
            mid = left+(right-left)/2;
            flag = guess(mid);
            if(flag==-1){
                right = mid -1;
            } else if(flag==1){
                left = mid + 1;
            } else{
                return mid;
            }
        }
        return right;
    }
}