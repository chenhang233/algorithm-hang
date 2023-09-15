class Solution {
public:
    vector<string> res;
    string combination;
    string list[10] = {"","", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"}; 
    vector<string> letterCombinations(string digits) {
        if (!digits.length()) return res;
         backTrack(0,digits);
        return res;
    }
    void backTrack(int index,string &digits) {
        if (index == digits.length()) {
            res.push_back(combination);
        } else {
            char digit = digits[index];
            string &letters = list[digit - 48];
            for (char& letter : letters) {
                combination.push_back(letter);
                backTrack(index+1,digits);
                combination.pop_back();
            }
        }
    }
};