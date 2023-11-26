# Write your MySQL query statement below
SELECT t1.score,
(SELECT COUNT(DISTINCT t2.score) FROM Scores t2 WHERE t2.score >= t1.score) as 'rank' 
FROM Scores t1 ORDER BY t1.score DESC;

# Write your MySQL query statement below
SELECT t1.score, COUNT(DISTINCT t2.score) as 'rank'
FROM Scores t1 INNER JOIN Scores t2 
ON t1.score <= t2.score GROUP BY t1.id ORDER BY t1.score DESC;  