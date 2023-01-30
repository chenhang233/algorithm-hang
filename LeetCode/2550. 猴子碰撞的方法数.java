
import java.math.BigInteger;

class Solution {
    public int monkeyMove(int n) {
                return (BigInteger.TWO.modPow(BigInteger.valueOf(n),BigInteger.valueOf(1000000007)).intValue()  + 1000000005) %1000000007;
    }
}