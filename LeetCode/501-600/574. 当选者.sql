# Write your MySQL query statement below
# SELECT t0.name FROM Candidate t0 WHERE t0.id = (
 
# )

SELECT name FROM Candidate t1 INNER JOIN (SELECT candidateId id FROM Vote t1 GROUP BY t1.candidateId ORDER BY COUNT(*) DESC LIMIT 1) t2 ON t1.id = t2.id;


