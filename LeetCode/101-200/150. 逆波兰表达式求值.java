class Solution {
  public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();
        HashMap<String,Boolean> map = new HashMap<>();
        map.put("+",true);
        map.put("-",true);
        map.put("*",true);
        map.put("/",true);
        for (int i = 0; i < tokens.length; i++) {
            if (map.containsKey(tokens[i])) {
                int x = stack.pop();
                int y = stack.pop();
                stack.add(reduce(y,x,tokens[i].charAt(0)));
            } else {
                stack.add(Integer.valueOf(tokens[i]));
            }
        }
        return stack.pop();
    }
    public int reduce(int x,int y, char z) {
       return switch (z) {
            case '+' -> x + y;
            case '-' -> x - y;
            case '*' -> x * y;
            case  '/' -> x / y;
           default -> 0;
       };
    }
}