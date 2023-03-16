class MovingAverage {

     int[] windows;
    int len;
    int p;
    boolean over;
    public MovingAverage(int size) {
        windows = new int[size];
        len = size;
        p = -1;
    }

    public double next(int val) {
        int nextP = (p + 1) % len;
        if (p != -1 && nextP == 0) over = true;
        windows[nextP] = val;
        double count = 0;
        for (int i = 0; i < windows.length; i++) {
            count += windows[i];
        }
        p = nextP;
        return over ? count / len : count / (nextP + 1);
    }
}


public class MovingAverage {
    int size;
    Queue<Integer> queue;
    double sum;

    public MovingAverage(int size) {
        this.size = size;
        this.queue = new ArrayDeque<>();
        this.sum = 0;
    }

    public double next(int val) {
        if (queue.size() == size) {
            Integer h = queue.poll();
            sum -= h;
        }
        sum += val;
        queue.offer(val);
        return sum / queue.size();
    }
}