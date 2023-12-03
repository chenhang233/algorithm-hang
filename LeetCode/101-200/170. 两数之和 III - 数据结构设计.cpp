class TwoSum
{
public:
    unordered_map<long, int> m;
    TwoSum()
    {
    }

    void add(int number)
    {
        if (m.count(number) != 0)
            m[number]++;
        else
            m[number] = 1;
    }

    bool find(int value)
    {
        for (auto &[k, v] : m)
        {
            long k2 = value - k;
            if (k2 == k)
            {
                if (v >= 2)
                    return true;
            }
            else
            {
                if (m.count(k2))
                    return true;
            }
        }
        return false;
    }
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * TwoSum* obj = new TwoSum();
 * obj->add(number);
 * bool param_2 = obj->find(value);
 */