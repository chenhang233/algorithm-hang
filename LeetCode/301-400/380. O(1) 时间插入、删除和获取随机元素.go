
import "math/rand"
type RandomizedSet struct {
    value map[int]int
    nums []int
}


func Constructor() RandomizedSet {
    s := RandomizedSet{
        value: make(map[int]int),
        nums: make([]int,1024),
    }
    return s
}


func (this *RandomizedSet) Insert(val int) bool {
    _,ok := this.value[val]
    if ok {
        return false
    }
     this.value[val] = len(this.nums)
     this.nums = append(this.nums, val)
    return true
}


func (this *RandomizedSet) Remove(val int) bool {
    id,ok := this.value[val]
    if !ok {        
        return false
    }
    last := len(this.nums) - 1
    this.nums[id] = this.nums[last]
    this.value[this.nums[id]] = id
    this.nums = this.nums[:last]
    delete(this.value,val)
    return true
}


func (this *RandomizedSet) GetRandom() int {
    return this.nums[rand.Intn(len(this.nums))]
}


/**
 * Your RandomizedSet object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Insert(val);
 * param_2 := obj.Remove(val);
 * param_3 := obj.GetRandom();
 */