class Solution {
    public int distMoney(int money, int children) {
   int count = 0,old = money,old2 = children;
        while (true) {
            if (money >= 8) {
                money -= 8;
                count++;
                children--;
            } else {
                break;
            }
        }
        System.out.println(count +"--"+children+"--"+money);
             while (children < 0) {
            children++;
            money += 8;
            count--;
        }
        while (children > money) {
            money+=8;
            children++;
            count--;
        }
                if (children == 0 && money > 0) count--;

      if (money == 4  && children == 1){
            count--;
        }
        return count < 0 ? -1 :count;

    }
}