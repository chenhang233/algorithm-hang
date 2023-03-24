# Write your MySQL query statement below
SELECT
t1.request_at Day,
ROUND(COUNT(IF(t1.status != 'completed',1,NULL)) / COUNT(t1.id) ,2) `Cancellation Rate`
FROM Trips t1
INNER JOIN Users t2 
INNER JOIN Users t3
ON t1.client_id = t2.users_id
AND t2.banned = 'NO'
AND t1.driver_id = t3.users_id 
AND t3.banned = 'NO'
AND t1.request_at >= '2013-10-01'
AND t1.request_at <= '2013-10-03'
GROUP BY t1.request_at;