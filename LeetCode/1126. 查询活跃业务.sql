# Write your MySQL query statement below

SELECT 
business_id
FROM
 Events e 
LEFT JOIN 
(
    SELECT event_type,
     AVG(occurences) as avg_occr 
     FROM Events 
     GROUP BY event_type) a
ON e.event_type = a.event_type 
AND e.occurences > avg_occr 
GROUP BY business_id 
HAVING COUNT(a.event_type) > 1;


