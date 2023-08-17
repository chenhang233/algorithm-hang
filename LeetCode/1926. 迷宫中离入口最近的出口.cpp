class Solution {
     int direction[4][2] = {
        {-1,0},
        {1,0},
        {0,-1},
        {0,1}
    };
public:
    int nearestExit(vector<vector<char>>& maze, vector<int>& entrance) {
        int m = maze.size(), n = maze[0].size();
        int visited[100][100] = {};
        queue<pair<int, int>> q;
        q.push(make_pair(entrance[0],entrance[1]));
        visited[entrance[0]][entrance[1]] = 1;
        while (!q.empty())
        {
            pair<int, int> p = q.front();
            q.pop();
            for (int i = 0; i < 4; i++)
            {
                int nextX = direction[i][0] + p.first;
                int nextY = direction[i][1] + p.second;
                if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n 
                   || maze[nextX][nextY] == '+' || visited[nextX][nextY] > 0) continue;
                visited[nextX][nextY] = visited[p.first][p.second] + 1;
                if (nextX == 0 || nextX == m - 1 || nextY == 0 || nextY == n - 1) {
                    return visited[nextX][nextY] - 1;
                }
                q.push(make_pair(nextX,nextY)); 
            }
        }
        return -1;
    }
};