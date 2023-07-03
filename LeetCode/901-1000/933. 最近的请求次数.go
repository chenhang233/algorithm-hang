type RecentCounter struct {
    queue []int
    ptr int
}


func Constructor() RecentCounter {
    return RecentCounter{
        queue: make([]int,0),
        ptr: 0,
    }
}


func (this *RecentCounter) Ping(t int) int {
    this.queue = append(this.queue, t)
    left := t - 3000
    for this.queue[this.ptr] < left {
        this.ptr++
    }
    return len(this.queue) - this.ptr
}


/**
 * Your RecentCounter object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Ping(t);
 */