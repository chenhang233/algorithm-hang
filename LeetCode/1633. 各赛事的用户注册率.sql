# Write your MySQL query statement below
SELECT
 t1.contest_id,
ROUND(COUNT(t1.user_id) / (SELECT COUNT(*)  FROM Users) * 100,2) percentage 
 FROM Register t1
 GROUP BY contest_id
 ORDER BY percentage   DESC,contest_id ;