# Write your MySQL query statement below

SELECT
ROUND(COUNT(t2.player_id) / COUNT(t1.player_id),2) fraction  
FROM (
    SELECT 
MIN(event_date) first_login,
player_id
FROM Activity 
GROUP BY player_id
) t1 LEFT JOIN
Activity t2
ON t1.player_id = t2.player_id 
AND  t1.first_login = t2.event_date - 1;