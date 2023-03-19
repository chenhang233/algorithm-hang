# Write your MySQL query statement below
SELECT 
t2.player_id,
t2.player_name,
SUM(t1.Wimbledon = t2.player_id) + SUM(t1.Fr_open =t2.player_id) 
+ SUM(t1.US_open  =t2.player_id) + SUM(t1.Au_open   = t2.player_id)  grand_slams_count 
FROM Championships t1,Players t2
GROUP BY t2.player_id
HAVING grand_slams_count > 0;