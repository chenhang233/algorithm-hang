# Write your MySQL query statement below
SELECT 
t2.player_id,
t2.event_date,
SUM(t1.games_played) games_played_so_far
FROM  Activity t1,Activity t2 
WHERE t1.player_id = t2.player_id &&
t1.event_date <= t2.event_date
GROUP BY t2.player_id, t2.event_date;