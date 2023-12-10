# Write your MySQL query statement below
SELECT id,movie,description,rating
FROM cinema t1
WHERE t1.description != 'boring' AND  t1.id % 2 = 1
ORDER BY t1.rating DESC;