class Solution {
 int count;
    int direction[4][2] = {
        {-1,0},
        {1,0},
        {0,-1},
        {0,1}
    };
    int pos[10][10];
public:
    int orangesRotting(vector<vector<int>>& grid) {
        memset(pos, -1, sizeof(pos));
        queue<pair<int, int>> q;
        count = 0;
        int m = grid.size(), n = grid[0].size();
        int ans = 0;
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (grid[i][j] == 2) {
                    q.push(make_pair(i, j));
                    pos[i][j] = 0;
                }
                else if (grid[i][j] == 1) {
                    count++;
                }
            }
        }
        while (!q.empty())
        {
            pair<int,int> f = q.front();
            q.pop();
            for (int i = 0; i < 4; i++)
            {
                int nextX = direction[i][0] + f.first;
                int nextY = direction[i][1] + f.second;
                if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n ||
                    ~pos[nextX][nextY] || !grid[nextX][nextY]) continue;
                pos[nextX][nextY] = pos[f.first][f.second] + 1;
                q.push(make_pair(nextX, nextY));
                if (grid[nextX][nextY] == 1) {
                    count--;
                    ans = pos[nextX][nextY];
                    if (!count) break;
                }
            }
        }
        return count ? -1 : ans; 
    }
};