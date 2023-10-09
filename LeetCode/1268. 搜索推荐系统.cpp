struct Trie {
        unordered_map<char,Trie*> child;
        priority_queue<string> words;
};

class Solution {
private:
    void addWords(Trie* root,string &str) {
        Trie* cur = root;
        for (char & c : str) {
            if (!cur->child.count(c)) {
                cur->child[c] = new Trie();
            }
            cur = cur->child[c];
            cur->words.push(str);
            if (cur->words.size() > 3)
            cur->words.pop();
        }
    }
public:
    vector<vector<string>> suggestedProducts(vector<string>& products, string searchWord) {
        Trie* root = new Trie();
        for (string & word : products) {
            addWords(root,word);
        }
        vector<vector<string>> ans;
        bool flag = false;
        for (char & c : searchWord) {
            if (flag || !root->child.count(c)) {
                flag = true;
                ans.emplace_back();
            } else {
                vector<string> selects;
                root = root->child[c];
                while(!root->words.empty()) {
                    selects.push_back(root->words.top());
                    root->words.pop();
                }
                reverse(selects.begin(),selects.end());
                ans.push_back(move(selects));
            }
        }
        return ans;
    }
};