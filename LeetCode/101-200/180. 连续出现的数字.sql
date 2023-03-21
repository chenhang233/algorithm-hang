# Write your MySQL query statement below
SELECT 
DISTINCT t1.Num ConsecutiveNums 
FROM Logs t1,Logs t2,Logs t3
WHERE t1.id = (t2.id - 1) 
AND t2.id = (t3.id - 1)
AND t1.Num = t2.Num
AND t2.Num = t3.Num;