#include<string>

using namespace std;

class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int m = word1.size(), n = word2.size();
        int i = 0, j = 0;
        string answer;
        answer.reserve(m + n);
        while ((i < m) || (j < n))
        {
            if (i < m) {
                answer.push_back(word1[i++]);
            }
            if (j < n) {
                answer.push_back(word2[j++]);
            }
        }
        return answer;
    }
};