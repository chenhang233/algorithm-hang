# Write your MySQL query statement below
SELECT 
t1.name
FROM Employee t1,Employee t2
WHERE t1.id = t2.managerId 
GROUP BY t1.id
HAVING COUNT(t2.managerId) >= 5;