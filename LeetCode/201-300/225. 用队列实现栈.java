class MyStack {
    Queue<Integer> stack;
    public MyStack() {
        stack = new LinkedList<>();
    }

    public void push(int x) {
        int n = stack.size();
        stack.offer(x);
        for (int i = 0; i < n; i++) {
            stack.offer(stack.poll());
        }
    }

    public int pop() {
      return   stack.poll();
    }

    public int top() {
    return stack.peek();
    }

    public boolean empty() {
    return stack.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */