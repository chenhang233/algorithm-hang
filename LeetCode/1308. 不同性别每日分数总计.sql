# Write your MySQL query statement below
SELECT t1.gender,t1.day,SUM(t2.score_points) total FROM Scores t1,Scores t2 
WHERE t1.gender = t2.gender && t1.day >= t2.day
GROUP BY t1.gender,t1.day 
ORDER BY t1.gender,t1.day