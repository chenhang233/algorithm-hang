
class SmallestInfiniteSet {
public:
    int m = 1;
    set<int> set1;
    SmallestInfiniteSet() {

    }
    
    int popSmallest() {
        int res = m;
        set1.insert(m);
        while(set1.count(++m)) {}
        return res;
    }
    
    void addBack(int num) {
        if (set1.count(num)) set1.erase(num);
        m = min(m,num);
    }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * SmallestInfiniteSet* obj = new SmallestInfiniteSet();
 * int param_1 = obj->popSmallest();
 * obj->addBack(num);
 */