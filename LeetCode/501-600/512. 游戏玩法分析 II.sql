# Write your MySQL query statement below

# SELECT t1.player_id,t1.device_id FROM Activity t1 WHERE t1.event_date  IN (
 
# )
SELECT t2.player_id,t1.device_id FROM Activity t1 INNER JOIN (
 SELECT MIN(event_date) event_date,player_id FROM Activity GROUP BY player_id
) t2 ON t1.event_date = t2.event_date AND t1.player_id = t2.player_id;