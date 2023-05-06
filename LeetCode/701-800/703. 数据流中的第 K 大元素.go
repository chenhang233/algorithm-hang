type KthLargest struct {
	sort.IntSlice
	k int
}

func (k *KthLargest) Pop() any {
	a := k.IntSlice
	v := a[len(a)-1]
	k.IntSlice = a[:len(a)-1]
	return v
}

func Constructor(k int, nums []int) KthLargest {
	kl := KthLargest{k: k}
	for _, num := range nums {
		kl.Add(num)
	}
	return kl
}

func (k *KthLargest) Push(v interface{}) {
	k.IntSlice = append(k.IntSlice, v.(int))
}

func (k *KthLargest) Add(val int) int {
	heap.Push(k, val)
	if k.Len() > k.k {
		heap.Pop(k)
	}
	return k.IntSlice[0]
}


/**
 * Your KthLargest object will be instantiated and called as such:
 * obj := Constructor(k, nums);
 * param_1 := obj.Add(val);
 */