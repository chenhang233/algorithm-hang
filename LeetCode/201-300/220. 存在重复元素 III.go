import "math/rand"
type node struct {
	ch       [2]*node
	priority int
	val      int
}

func (n *node) cmp(v int) int {
	switch {
	case v < n.val:
		return 0
	case v > n.val:
		return 1
	default:
		return -1
	}
}

func (n *node) rotate(v int) *node {
	x := n.ch[v^1]
	n.ch[v^1] = x.ch[v]
	x.ch[v] = n
	return x
}

type treeSet struct {
	root *node
}

func (s *treeSet) _put(o *node, val int) *node {
	if o == nil {
		return &node{priority: rand.Int(), val: val}
	}
	d := o.cmp(val)
	o.ch[d] = s._put(o.ch[d], val)
	if o.ch[d].priority > o.priority {
		o = o.rotate(d ^ 1)
	}
	return o
}

func (s *treeSet) put(val int) {
	s.root = s._put(s.root, val)
}

func (s *treeSet) _delete(o *node, val int) *node {
	if d := o.cmp(val); d >= 0 {
		o.ch[d] = s._delete(o.ch[d], val)
		return o
	}
	if o.ch[1] == nil {
		return o.ch[0]
	}
	if o.ch[0] == nil {
		return o.ch[1]
	}
	d := 0
	if o.ch[0].priority > o.ch[1].priority {
		d = 1
	}
	o = o.rotate(d)
	o.ch[d] = s._delete(o.ch[d], val)
	return o
}

func (s *treeSet) delete(val int) {
	s.root = s._delete(s.root, val)
}

func (s *treeSet) lowerBound(val int) (ll *node) {
	for o := s.root; o != nil; {
		switch c := o.cmp(val); {
		case c == 0:
			ll = o
			o = o.ch[0]
		case c > 0:
			o = o.ch[1]
		default:
			return o
		}
	}
	return
}

func containsNearbyAlmostDuplicate(nums []int, k int, t int) bool {
	set := &treeSet{}
	for i, v := range nums {
		if lb := set.lowerBound(v - t); lb != nil && lb.val <= v+t {
			return true
		}
		set.put(v)
		if i >= k {
			set.delete(nums[i-k])
		}
	}
	return false
}
