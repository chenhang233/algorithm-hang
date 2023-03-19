class MyQueue {

    Deque<Integer> queue;
    public MyQueue() {
        queue = new LinkedList<>();
    }

    public void push(int x) {
        queue.push(x);
    }

    public int pop() {
        return queue.pollLast();
    }

    public int peek() {
     return queue.peekLast();

}

    public boolean empty() {
        return  queue.isEmpty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */