# Write your MySQL query statement below
SELECT
    (CASE WHEN from_id > to_id THEN to_id ELSE from_id END) person1,
    (CASE WHEN from_id > to_id THEN from_id ELSE to_id END) person2,
    COUNT(*) call_count,
    SUM(duration) total_duration 
 FROM Calls GROUP BY person1,person2;