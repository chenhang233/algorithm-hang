# Write your MySQL query statement below
SELECT
t1.visited_on,
SUM(t2.amount) amount,
ROUND(SUM(t2.amount) / 7,2) average_amount
FROM  (SELECT DISTINCT visited_on FROM Customer) t1
INNER JOIN Customer t2
ON DATEDIFF(t1.visited_on, t2.visited_on) >= 0
AND  DATEDIFF(t1.visited_on, t2.visited_on) <= 6
GROUP BY t1.visited_on
HAVING COUNT(DISTINCT t2.visited_on) >= 7
ORDER BY t1.visited_on;