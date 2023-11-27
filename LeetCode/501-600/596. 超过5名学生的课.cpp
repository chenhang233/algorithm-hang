# Write your MySQL query statement below
SELECT t1.class FROM Courses t1 GROUP BY t1.class HAVING COUNT(t1.student) >= 5;