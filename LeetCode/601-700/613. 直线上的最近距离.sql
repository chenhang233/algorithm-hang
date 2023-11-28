# Write your MySQL query statement below
SELECT MIN(ABS(t1.x - t2.x)) as 'shortest' FROM Point t1,Point t2 WHERE t1.x != t2.x;