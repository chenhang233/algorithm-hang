# Write your MySQL query statement below
SELECT t2.name Department,t1.name Employee ,t1.Salary 
FROM Employee t1,Department t2 
WHERE t1.departmentId = t2.id AND t1.id IN (
SELECT t1.id FROM Employee t1,Employee t2
WHERE t1.salary <= t2.salary AND t1.departmentId  = t2.departmentId
GROUP BY t1.id HAVING COUNT(DISTINCT t2.salary) <= 3
);
