class Trie {
private:
    vector<Trie*> childrens;
    bool isEnd;
    Trie* serch_prefix(string str) {
        Trie* node = this;
        for (char s : str) {
            s -= 'a';
            if (node->childrens[s] == nullptr) 
                return nullptr;
            node = node->childrens[s];
        }
        return  node;
    }
public:
    Trie(): childrens(26),isEnd(false) {}
    ~Trie() {}
    
    void insert(string word) {
        Trie* node = this;
        for (char s : word) {
            s -= 'a';
            if (node->childrens[s] == nullptr) 
                node->childrens[s] = new Trie();
            node = node->childrens[s];
        }
        node->isEnd = true;
    }
    
    bool search(string word) {
        Trie* t = serch_prefix(word);
        return t != nullptr && t->isEnd;
    }
    
    bool startsWith(string prefix) {
        Trie* t = serch_prefix(prefix);
        return t != nullptr;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */