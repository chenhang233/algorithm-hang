class MyCircularQueue {

 private int[] data;
    private int front,end;
    public MyCircularQueue(int k) {
        front = 0;
        end = 0;
        data = new int[k + 1];
    }

    public boolean enQueue(int value) {
        if (isFull()) return false;
        data[end] = value;
        end = (end + 1) % data.length;
        return true;
    }

    public boolean deQueue() {
        if (isEmpty()) return false;
        front = (front + 1) % data.length;
        return true;
    }

    public int Front() {
        if (isEmpty()) return -1;
        return data[front];
    }

    public int Rear() {
        if (isEmpty()) return -1;
        return data[(end - 1 + data.length) % data.length];
    }

    public boolean isEmpty() {
        return front == end;
    }

    public boolean isFull() {
        return (end + 1) % data.length == front;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue obj = new MyCircularQueue(k);
 * boolean param_1 = obj.enQueue(value);
 * boolean param_2 = obj.deQueue();
 * int param_3 = obj.Front();
 * int param_4 = obj.Rear();
 * boolean param_5 = obj.isEmpty();
 * boolean param_6 = obj.isFull();
 */