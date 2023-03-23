# Write your MySQL query statement below
(
    SELECT 
t2.name results
FROM MovieRating t1
INNER JOIN  Users t2
ON t1.user_id = t2.user_id
GROUP BY t1.user_id 
ORDER BY COUNT(*) DESC, t2.name  LIMIT 1
)
UNION
(
  SELECT
  t2.title results
  FROM MovieRating  t1
  INNER JOIN Movies t2
  ON t1.movie_id = t2.movie_id
  WHERE t1.created_at LIKE "2020-02%"
  GROUP BY t1.movie_id
  ORDER BY AVG(t1.rating) DESC,t2.title LIMIT 1
)
;