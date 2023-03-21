# Write your MySQL query statement below
SELECT 
t1.id p1,
t2.id p2,
ABS(t1.x_value - t2.x_value) * ABS(t1.y_value - t2.y_value) area
FROM Points t1
INNER JOIN Points t2
ON t1.id != t2.id && 
t1.x_value != t2.x_value&& t1.y_value != t2.y_value
WHERE t1.id < t2.id
ORDER BY area DESC, p1,p2;