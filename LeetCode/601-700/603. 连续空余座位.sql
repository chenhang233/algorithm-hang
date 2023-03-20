# Write your MySQL query statement below
SELECT t1.seat_id 
FROM Cinema t1
LEFT JOIN Cinema t2
ON t1.seat_id - 1 = t2.seat_id 
LEFT JOIN Cinema t3
ON t1.seat_id + 1 = t3.seat_id
WHERE t1.free = 1 
AND (t2.free = 1 || t3.free = 1)
ORDER BY t1.free DESC;